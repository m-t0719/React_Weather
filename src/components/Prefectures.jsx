import React from 'react'

const Prefectures = (props) => {
  const states = [
    { value: null, name: '地域選択'},
    { value: 'Hokkaido', name: '北海道' },
    { value: 'Aomori', name: '青森' },
    { value: 'Iwate', name: '岩手' },
    { value: 'Miyagi', name: '宮城' },
    { value: 'Akita', name: '秋田' },
    { value: 'Yamagata', name: '山形' },
    { value: 'Fukushima', name: '福島' },
    { value: 'Ibaraki', name: '茨城' },
    { value: 'Tochigi', name: '栃木' },
    { value: 'Gunma', name: '群馬' },
    { value: 'Saitama', name: '埼玉' },
    { value: 'Chiba', name: '千葉' },
    { value: 'Tokyo', name: '東京' },
    { value: 'Kanagawa', name: '神奈川'},
    { value: 'Niigata', name: '新潟'},
    { value: 'Toyama', name: '富山'},
    { value: 'Ishikawa', name: '石川'},
    { value: 'Fukui', name: '福井'},
    { value: 'Yamanashi', name: '山梨'},
    { value: 'Nagano', name: '長野'},
    { value: 'Shizuoka', name:'静岡'},
    { value: 'Aichi', name:'愛知'},
    { value: 'Mie', name:'三重'},
    { value: 'Shiga', name:'滋賀'},
    { value: 'Kyoto', name:'京都'},
    { value: 'Osaka', name: '大阪' },
    { value: 'Hyogo', name: '兵庫' },
    { value: 'Nara', name: '奈良' },
    { value: 'Wakayama', name: '和歌山' },
    { value: 'Tottori', name: '鳥取' },
    { value: 'Shimane', name: '島根' },
    { value: 'Okayama', name: '岡山' },
    { value: 'Hiroshima', name: '広島' },
    { value: 'Yamaguchi', name: '山口' },
    { value: 'Tokushima', name: '徳島' },
    { value: 'Kagawa', name: '香川'},
    { value: 'Ehime', name: '愛媛'},
    { value: 'Kochi', name: '高知'},
    { value: 'Fukuoka', name: '福岡'},
    { value: 'Saga', name: '佐賀'},
    { value: 'Nagasaki', name: '長崎'},
    { value: 'Kumamoto', name: '熊本'},
    { value: 'Oita', name: '大分'},
    { value: 'Miyazaki', name: '宮崎'},
    { value: 'Kagoshima', name: '鹿児島'},
    { value: 'Okinawa', name: '沖縄'}
  ]
  const options = states.map(
    (d) => (
      <option key={d.value} value={d.value}>
        {d.name}
      </option>
    )
  )
  return (
    <div className="prefectures">
      <form>
        <select value={props.prefectures_value} onChange={props.onChange}>
          {options}
        </select>
      </form>
    </div>
  )
}

export default Prefectures