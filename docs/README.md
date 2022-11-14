# Features

구현할 기능을 기술합니다.

## 초기 세팅

- [x] 로또 게임 관련 상수 및 문구 config.js에 명시

## 게임

- [x] 로또 티켓 생성 : generateLotto()
- [x] 로또 당첨 내역 확인: checkWinningLottoRank()
- [x] 로또 수익률 통계 생성: generateLottoStat()

## 게임 입출력

- [x] 로또 구입 금액 입력: getLottoBudget()
  - [x] 구입 입출력 검증: validateLottoBudget()
- [x] 당첨 번호 입력: getTargetNumber()
  - [ ] 당첨 번호 입력 검증: validateTargetNumber()
- [x] 보너스 번호 입력: getBonusNumber()
  - [ ] 보너스 번호 입력 검증: validateBonueNumber()
- [x] 로또 티켓 getter: get numbers()
- [ ] 통계 출력: printLottoStat()

## 연동

- [ ] Game 클래스가 Lotto 클래스 사용하게 변경
- [ ] Rank 클래스가 Lotto 클래스 사용하게 변경
- [ ] Game, Lotto, Rank 클래스 연동

## 예외 처리

- [ ] 입력 길이 오류: INVALID_INPUT_LENGTH
- [ ] 입력 타입 오류: INVALID_INPUT_TYPE
- [ ] 입력값 범위 오류: INVALID_INPUT_RANGE

## 테스트 구현

- [ ] 로또 티켓 정상 생성 확인
- [ ] 구입 입츨력 검증 테스트
- [ ] 당첨 번호 입력 검증 테스트
- [ ] 보너스 번호 입력 검증 테스트
- [ ] 로또 당첨 내역 생성 검증
- [ ] 로또 수익률이 올바른지 검증
