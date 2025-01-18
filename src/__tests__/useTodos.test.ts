import { getTodos } from "../api/jsonTest";
import { jsonInstance } from "../api/axiosInstance";
import { Todo } from "../types/todo";

// 모킹
jest.mock("../api/axiosInstance", () => ({
  jsonInstance: {
    get: jest.fn(),
  },
}));

describe("getTodos", () => {
  const mockedJsonInstance = jsonInstance as jest.Mocked<typeof jsonInstance>;

  // 각 테스트 전에 모든 mock 초기화
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("성공적으로 todos를 가져와야 함", async () => {
    const mockTodos: Todo[] = [
      {
        id: 1,
        title: "할 일 1",
        completed: false,
        userId: 1,
      },
      {
        id: 2,
        title: "할 일 2",
        completed: true,
        userId: 1,
      },
    ];

    // axios get 요청에 대한 응답 모의
    mockedJsonInstance.get.mockResolvedValueOnce({ data: mockTodos });

    const result = await getTodos();

    expect(result).toEqual(mockTodos);
    expect(mockedJsonInstance.get).toHaveBeenCalledTimes(1);
    expect(mockedJsonInstance.get).toHaveBeenCalledWith("/todos");
  });

  it("API 호출 실패시 에러를 던져야 함", async () => {
    // 에러 응답 모의
    const mockError = new Error("Failed to fetch todos");
    mockedJsonInstance.get.mockRejectedValueOnce(mockError);

    await expect(getTodos()).rejects.toThrow("Failed to fetch todos");
    expect(mockedJsonInstance.get).toHaveBeenCalledTimes(1);
    expect(mockedJsonInstance.get).toHaveBeenCalledWith("/todos");
  });

  it("빈 배열을 반환하는 경우를 처리해야 함", async () => {
    // 빈 배열 응답 모의
    mockedJsonInstance.get.mockResolvedValueOnce({ data: [] });

    const result = await getTodos();

    expect(result).toEqual([]);
    expect(mockedJsonInstance.get).toHaveBeenCalledTimes(1);
    expect(mockedJsonInstance.get).toHaveBeenCalledWith("/todos");
  });
});
