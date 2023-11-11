import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../src/InputView.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("날짜 입력 테스트", () => {
  beforeAll(() => {
    mockQuestions(["10", "", "abc", "11.3", "32"]);
  });

  test("사용자가 날짜를 입력하면 숫자로 반환한다.", async () => {
    const input = await InputView.readDate();
    expect(input).toEqual(10);
  });

  test("사용자가 날짜를 입력하지 않으면 에러를 던진다.", async () => {
    await expect(InputView.readDate()).rejects.toThrow("[ERROR]");
  });
  test("사용자가 숫자가 아닌 문자를 입력하면 에러를 던진다.", async () => {
    await expect(InputView.readDate()).rejects.toThrow("[ERROR]");
  });
  test("사용자가 자연수가 아닌 수를 입력하면 에러를 던진다.", async () => {
    await expect(InputView.readDate()).rejects.toThrow("[ERROR]");
  });
  test("사용자가 1보다 작거나 31보다 큰 숫자를 입력하면 에러를 던진다.", async () => {
    await expect(InputView.readDate()).rejects.toThrow("[ERROR]");
  });
});
