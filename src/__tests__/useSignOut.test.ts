import { renderHook, act } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useSignOut from "../hooks/useSignOut";
import { URLS } from "../constants/urls";

// 모킹
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../store/useAuthStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("../hooks/useSignOut", () => {
  let mockNavigate: jest.Mock;
  let mockSetAccessToken: jest.Mock;
  let mockSetIsLoggedIn: jest.Mock;
  let mockSetNickname: jest.Mock;

  beforeEach(() => {
    mockNavigate = jest.fn();
    mockSetAccessToken = jest.fn();
    mockSetIsLoggedIn = jest.fn();
    mockSetNickname = jest.fn();

    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    mocked(useAuthStore).mockReturnValue({
      setAccessToken: mockSetAccessToken,
      setIsLoggedIn: mockSetIsLoggedIn,
      setNickname: mockSetNickname,
    });
  });

  it("호출 시 인증 상태를 지우고 홈으로 이동", async () => {
    const { result } = renderHook(() => useSignOut());

    await act(async () => {
      await result.current();
    });

    expect(mockSetAccessToken).toHaveBeenCalledWith(null);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
    expect(mockSetNickname).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith(URLS.home);
  });
});
