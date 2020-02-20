import React from 'react'

// 英語の都市名を日本語に変換するために配列を用意
const cityList = [
  {eng: 'Hokkaido', ja: '北海道'},
  {eng: 'Aomori', ja: '青森県'},
  {eng: 'Iwate', ja: '岩手県'},
  {eng: 'Miyagi', ja: '宮城県'},
  {eng: 'Akita', ja: '秋田県'},
  {eng: 'Yamagata', ja: '山形県'},
  {eng: 'Fukushima', ja: '福島県'},
  {eng: 'Ibaraki', ja: '茨城県'},
  {eng: 'Tochigi', ja: '栃木県'},
  {eng: 'Gunma', ja: '群馬県'},
  {eng: 'Saitama', ja: '埼玉県'},
  {eng: 'Chiba', ja: '千葉県'},
  {eng: 'Tokyo', ja: '東京都'},
  {eng: 'Kanagawa', ja: '神奈川県'},
  {eng: 'Niigata', ja: '新潟県'},
  {eng: 'Toyama', ja: '富山県'},
  {eng: 'Ishikawa', ja: '石川県'},
  {eng: 'Fukui', ja: '福井県'},
  {eng: 'Yamanashi', ja: '山梨県'},
  {eng: 'Nagano', ja: '長野県'},
  {eng: 'Shizuoka', ja: '静岡県'},
  {eng: 'Aichi', ja: '愛知県'},
  {eng: 'Mie', ja: '三重県'},
  {eng: 'Shiga', ja: '滋賀県'},
  {eng: 'Kyoto', ja: '京都府'},
  {eng: 'Osaka', ja: '大阪府'},
  {eng: 'Hyogo', ja: '兵庫県'},
  {eng: 'Nara', ja: '奈良県'},
  {eng: 'Wakayama', ja: '和歌山県'},
  {eng: 'Tottori', ja: '鳥取県'},
  {eng: 'Shimane', ja: '島根県'},
  {eng: 'Okayama', ja: '岡山県'},
  {eng: 'Hiroshima', ja: '広島県'},
  {eng: 'Yamaguchi', ja: '山口県'},
  {eng: 'Tokushima', ja: '徳島県'},
  {eng: 'Kagawa', ja: '香川県'},
  {eng: 'Ehime', ja: '愛媛県'},
  {eng: 'Kochi', ja: '高知県'},
  {eng: 'Fukuoka', ja: '福岡県'},
  {eng: 'Saga', ja: '佐賀県'},
  {eng: 'Nagasaki', ja: '長崎県'},
  {eng: 'Kumamoto', ja: '熊本県'},
  {eng: 'Oita', ja: '大分県'},
  {eng: 'Miyazaki', ja: '宮崎県'},
  {eng: 'Kagoshima', ja: '鹿児島県'},
  {eng: 'Okinawa', ja: '沖縄県'},
]

const AlphabetToJapaneseCityName = (props) => {
  const cityNameFindEng = cityList.find((city) => {
    return city.eng === props.city
  })
    if(cityNameFindEng !== undefined) {
      return (<p className="city">{cityNameFindEng.ja}</p>)
    } else {
      return (<p className="city">{props.city}</p>)
    }
  // return(
  //   <p className="city">{props.city}</p>
  // )
}

export default AlphabetToJapaneseCityName