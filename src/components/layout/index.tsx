import React from 'react'

import { Header } from './header'

interface IProps {
  children: React.ReactNode
}

export const Layout = ({ children }: IProps) => (
  <>
    <Header
      user={{
        name: 'Jane Spoonfighter',
        image:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
      }}
      tabs={[
        'すべてのカテゴリー',
        'ビジネススキル',
        '趣味・ライフスタイル',
        'ビューティー・ヘルス',
        '料理・グルメ',
        'Web・IT・デザイン',
        '写真・映像',
        'ライフハック・自己啓発',
        'ヨガ・フィットネス',
        '起業・副業・キャリア',
        '英語・語学',
        'スポーツ・アウトドア',
        '文化・教養',
        '子育て・キッズ',
        'ハンドメイド・クラフト',
        'ものづくり・DIY'
      ]}
    />
    {children}
  </>
)
