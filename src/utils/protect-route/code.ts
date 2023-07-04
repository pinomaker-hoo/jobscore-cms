const getType = (code: string) => {
  switch (code) {
    case '0000':
      return '시한폭탄'
    case '0001':
      return '반지하 스타트업'
    case '0010':
      return '사람만 좋아'
    case '0011':
      return '돈과 미래'
    case '0100':
      return '가진 게 자유뿐'
    case '0101':
      return '달려라 하니'
    case '0110':
      return '햄스터'
    case '0111':
      return '스타트업'
    case '1000':
      return '물경력'
    case '1001':
      return '느긋한 일개미'
    case '1010':
      return '해변의 모래성'
    case '1011':
      return '타임피스'
    case '1100':
      return 'YOLO'
    case '1101':
      return '복지는 셀프'
    case '1110':
      return '몸은 편해'
    case '1111':
      return '지상낙원'
    default:
      break
  }
}

export default getType
