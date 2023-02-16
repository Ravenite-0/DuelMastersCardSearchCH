﻿	
	//種族中英日對照表
	var raceMapping = {
	
		//資料集合
		map :
			[
				{	Jap : "アーマード・ドラゴン",				Eng : "Armored Dragon",			Chi : "裝甲龍",			isCategory : false,	},
				{	Jap : "ルナーズ・サンガイザー",				Eng : "Luna's Sun Geyser",		Chi : "月神的日泉",		isCategory : false,	},
				{	Jap : "ルナティック・エンペラー",			Eng : "Lunatic Emperor",		Chi : "瘋狂皇帝",		isCategory : false,	},
				{	Jap : "サムライ",							Eng : "Samurai",				Chi : "武士",			isCategory : false,	},
				{	Jap : "レッド・コマンド・ドラゴン",			Eng : "Red Commond Dragon",		Chi : "赤紅指揮龍",		isCategory : false,	},
				{	Jap : "フェニックス",						Eng : "Phoenix",				Chi : "鳳凰",			isCategory : false,	},
				{	Jap : "ファイアー・バード",					Eng : "Fire Bird",				Chi : "火鳥",			isCategory : false,	},
				{	Jap : "ティラノ・ドレイク",					Eng : "Tyranno Drake",			Chi : "恐龍",			isCategory : false,	},
				{	Jap : "エイリアン",							Eng : "Alien",					Chi : "外星人",			isCategory : false,	},
				{	Jap : "ハンター",							Eng : "Hunter",					Chi : "獵人",			isCategory : false,	},
				{	Jap : "ゴッド",								Eng : "God",					Chi : "神",				isCategory : false,	},
				{	Jap : "アース・ドラゴン",					Eng : "Earth Dragon",			Chi : "地龍",			isCategory : false,	},
				{	Jap : "ドリームメイト",						Eng : "Dream Mate",				Chi : "夢幻伙伴",		isCategory : false,	},
				{	Jap : "グラディエーター",					Eng : "Gradiator",				Chi : "劍鬥士",			isCategory : false,	},
				{	Jap : "エンジェル・コマンド",				Eng : "Angel Command",			Chi : "天使指揮",		isCategory : false,	},
				{	Jap : "アポロニア・ドラゴン",				Eng : "Apollonia Dragon",		Chi : "太陽龍",			isCategory : false,	},
				{	Jap : "メカ・デル・ソル",					Eng : "Mecha Del Sol",			Chi : "光器",			isCategory : false,	},
				{	Jap : "ライトブリンガー",					Eng : "Light Bringer",			Chi : "予言者",			isCategory : false,	},
				{	Jap : "オリジン",							Eng : "Origin",					Chi : "始源",			isCategory : false,	},
				{	Jap : "スノーフェアリー",					Eng : "Snow Fearie",			Chi : "雪妖",			isCategory : false,	},
				{	Jap : "デーモン・コマンド",					Eng : "Demon Command",			Chi : "惡魔指揮",		isCategory : false,	},
				{	Jap : "フレイム・モンスター",				Eng : "Flame Monster",			Chi : "火焰獸",			isCategory : false,	},
				{	Jap : "ゴースト",							Eng : "Ghost",					Chi : "鬼影",			isCategory : false,	},
				{	Jap : "ヒューマノイド",						Eng : "Human",					Chi : "人類",			isCategory : false,	},
				{	Jap : "グランド・デビル",					Eng : "Grand Devil",			Chi : "大魔鬼",			isCategory : false,	},
				{	Jap : "ゼノパーツ",							Eng : "Geno Parts",				Chi : "異化機件",		isCategory : false,	},
				{	Jap : "パンドラボックス",					Eng : "Pandora Box",			Chi : "潘朵拉箱",		isCategory : false,	},
				{	Jap : "ブルー・モンスター",					Eng : "Blue Monster",			Chi : "藍海獸",			isCategory : false,	},
				{	Jap : "キカイヒーロー",						Eng : "Kikai Hero",				Chi : "機械英雄",		isCategory : false,	},
				{	Jap : "サイバー・コマンド",					Eng : "Cyber Command",			Chi : "電子指揮",		isCategory : false,	},
				{	Jap : "リビング・デッド",					Eng : "Living Dead",			Chi : "活屍",			isCategory : false,	},
				{	Jap : "スプラッシュ・クイーン",				Eng : "Splash Queen",			Chi : "浪花皇后",		isCategory : false,	},
				{	Jap : "ドラゴン・ゾンビ",					Eng : "Dragon Zombie",			Chi : "屍龍",			isCategory : false,	},
				{	Jap : "グレートメカオー",					Eng : "Great Mecha-O",			Chi : "機械人",			isCategory : false,	},
				{	Jap : "ブレイブ・スピリット",				Eng : "Brave Spirit",			Chi : "勇氣之魂",		isCategory : false,	},
				{	Jap : "エンジェル・コマンド・ドラゴン",		Eng : "Angel Command Dragon",	Chi : "天使指揮龍",		isCategory : false,	},
				{	Jap : "ビーストフォーク",					Eng : "Beast Folk",				Chi : "獸人",			isCategory : false,	},
				{	Jap : "アンノウン",							Eng : "Unknown",				Chi : "未知",			isCategory : false,	},
				{	Jap : "シノビ",								Eng : "Shinobi",				Chi : "忍者",			isCategory : false,	},
				{	Jap : "ガーディアン",						Eng : "Guardian",				Chi : "守護者",			isCategory : false,	},
				{	Jap : "ワイルド・ベジーズ",					Eng : "Wild Veggies",			Chi : "野菜",			isCategory : false,	},
				{	Jap : "シャイニング・コマンド・ドラゴン",	Eng : "Shining Command Dragon",	Chi : "閃光指揮龍",		isCategory : false,	},
				{	Jap : "イニシエート",						Eng : "Initiate",				Chi : "使徒",			isCategory : false,	},
				{	Jap : "ガイア・コマンド",					Eng : "Gaia Command",			Chi : "大地指揮",		isCategory : false,	},
				{	Jap : "バーサーカー",						Eng : "Berserker",				Chi : "狂戰士",			isCategory : false,	},
				{	Jap : "ゼニス",								Eng : "Zenith",					Chi : "天頂",			isCategory : false,	},
				{	Jap : "スピリット・クォーツ",				Eng : "Spirit Quartz",			Chi : "靈魂晶礦",		isCategory : false,	},
				{	Jap : "ヘドリアン",							Eng : "Hedrian",				Chi : "變異體",			isCategory : false,	},
				{	Jap : "ナイト",								Eng : "Knight",					Chi : "騎士",			isCategory : false,	},
				{	Jap : "ダイナモ",							Eng : "Dynamo",					Chi : "發電機",			isCategory : false,	},
				{	Jap : "サバイバー",							Eng : "Survivor",				Chi : "倖存者",			isCategory : false,	},
				{	Jap : "サイバー・ウイルス",					Eng : "Cyber Virus",			Chi : "電子病毒",		isCategory : false,	},
				{	Jap : "コスモ・ウォーカー",					Eng : "Cosmo Walker",			Chi : "宇宙行者",		isCategory : false,	},
				{	Jap : "リキッド・ピープル",					Eng : "Liquid People",			Chi : "液人",			isCategory : false,	},
				{	Jap : "ジャイアント",						Eng : "Giant",					Chi : "巨人",			isCategory : false,	},
				{	Jap : "ワンダー・トリック",					Eng : "Wonder Trick",			Chi : "驚異術師",		isCategory : false,	},
				{	Jap : "エメラルド・モンスター",				Eng : "Emerald Monster",		Chi : "綠寶石獸",		isCategory : false,	},
				{	Jap : "ダークロード",						Eng : "Dark Load",				Chi : "闇黑領主",		isCategory : false,	},
				{	Jap : "パラサイトワーム",					Eng : "Parasite Worm",			Chi : "寄生蟲",			isCategory : false,	},
				{	Jap : "レインボー・ファントム",				Eng : "Rainbow Phantom",		Chi : "虹魅",			isCategory : false,	},
				{	Jap : "デスパペット",						Eng : "Death Puppet",			Chi : "死亡傀儡",		isCategory : false,	},
				{	Jap : "アーク・セラフィム",					Eng : "Arc Seraphim",			Chi : "靈騎",			isCategory : false,	},
				{	Jap : "アンノイズ",							Eng : "Unnoise",				Chi : "無聲",			isCategory : false,	},
				{	Jap : "サイバーロード",						Eng : "Cyber Lord",				Chi : "電子領主",		isCategory : false,	},
				{	Jap : "デーモン・コマンド・ドラゴン",		Eng : "Demon Command Dragon",	Chi : "惡魔指揮龍",		isCategory : false,	},
				{	Jap : "ファンキー・ナイトメア",				Eng : "Funky Nightmare",		Chi : "怪異夢魘",		isCategory : false,	},
				{	Jap : "ドラグナー",							Eng : "Draguner",				Chi : "龍騎兵",			isCategory : false,	},
				{	Jap : "ダーク・モンスター",					Eng : "Dark Monster",			Chi : "黑闇獸",			isCategory : false,	},
				{	Jap : "ボルケーノ・ドラゴン",				Eng : "Volcano Dragon",			Chi : "火山龍",			isCategory : false,	},
				{	Jap : "フレイム・コマンド",					Eng : "Flame Command",			Chi : "火炎指揮",		isCategory : false,	},
				{	Jap : "オラクル",							Eng : "Oracle",					Chi : "神諭使",			isCategory : false,	},
				{	Jap : "ゲル・フィッシュ",					Eng : "Gel Fish",				Chi : "膠魚",			isCategory : false,	},
				{	Jap : "ロスト・クルセイダー",				Eng : "Lost Crusader",			Chi : "消逝的十字軍",	isCategory : false,	},
				{	Jap : "アーマロイド",						Eng : "Armoroid",				Chi : "裝甲兵",			isCategory : false,	},
				{	Jap : "アウトレイジMAX",					Eng : "Outrage MAX",			Chi : "無法者MAX",		isCategory : false,	},
				{	Jap : "オラクリオン",						Eng : "Oraclion",				Chi : "神諭福音",		isCategory : false,	},
				{	Jap : "ゴッド・ノヴァOMG",					Eng : "God Nova Omega",			Chi : "神星Ω",			isCategory : false,	},
				{	Jap : "アウトレイジ",						Eng : "Outrage",				Chi : "無法者",			isCategory : false,	},
				{	Jap : "トライストーン",						Eng : "Tri Stone",				Chi : "三角石",			isCategory : false,	},
				{	Jap : "マーフォーク",						Eng : "Merfolk",				Chi : "魚人",			isCategory : false,	},
				{	Jap : "ミステリー・トーテム",				Eng : "Mystery Totem",			Chi : "神秘圖騰",		isCategory : false,	},
				{	Jap : "ビースト・コマンド",					Eng : "Beast Command",			Chi : "野獸指揮",		isCategory : false,	},
				{	Jap : "キング・コマンド・ドラゴン",			Eng : "King Command Dragon",	Chi : "王者指揮龍",		isCategory : false,	},
				{	Jap : "ガイアール・コマンド・ドラゴン",		Eng : "Gaial Command Dragon",	Chi : "勇氣指揮龍",		isCategory : false,	},
				{	Jap : "ヒューマノイド爆",					Eng : "Human Baku",				Chi : "人類爆",			isCategory : false,	},
				{	Jap : "ジュラシック・コマンド・ドラゴン",	Eng : "Jurassic Command Dragon",Chi : "侏儸紀指揮龍",	isCategory : false,	},
				{	Jap : "クリスタル・コマンド・ドラゴン",		Eng : "Crystal Command Dragon",	Chi : "水晶指揮龍",		isCategory : false,	},
				{	Jap : "リキッド・ピープル閃",				Eng : "Liquid People Shinning",	Chi : "液人閃",			isCategory : false,	},
				{	Jap : "ビーストフォーク號",					Eng : "Beast Folk Go",			Chi : "獸人號",			isCategory : false,	},
				{	Jap : "ブラック・コマンド・ドラゴン",		Eng : "Black Command Dragon",	Chi : "闇黑指揮龍",		isCategory : false,	},
				{	Jap : "ドラゴノイド",						Eng : "Dragonoid",				Chi : "龍人",			isCategory : false,	},
				{	Jap : "ポセイディア・ドラゴン",				Eng : "Posedia Dragon",			Chi : "海王龍",			isCategory : false,	},
				{	Jap : "ブレインジャッカー",					Eng : "Brain Jacker",			Chi : "提腦者",			isCategory : false,	},
				{	Jap : "ゴッド・ノヴァ",						Eng : "God Nova",				Chi : "神星",			isCategory : false,	},
				{	Jap : "ロック・ビースト",					Eng : "Rock Beast",				Chi : "岩獸",			isCategory : false,	},
				{	Jap : "マジカル・モンスター",				Eng : "Magical Monster",		Chi : "魔力獸",			isCategory : false,	},
				{	Jap : "ヒーロー",							Eng : "Hero",					Chi : "英雄",			isCategory : false,	},
				{	Jap : "レインボー・コマンド・ドラゴン",		Eng : "Rainbow Command Dragon",	Chi : "虹指揮龍",		isCategory : false,	},
				{	Jap : "ワールド・コマンド",					Eng : "World Command",			Chi : "世界指揮",		isCategory : false,	},
				{	Jap : "ジャイアント・インセクト",			Eng : "Giant Insect",			Chi : "巨昆蟲",			isCategory : false,	},
				{	Jap : "バルーン・マッシュルーム",			Eng : "Balloon Mushroom",		Chi : "氣球蘑菇",		isCategory : false,	},
				{	Jap : "アースイーター",						Eng : "Earth Eater",			Chi : "噬地獸",			isCategory : false,	},
				{	Jap : "シャイン・モンスター",				Eng : "Shine Monster",			Chi : "閃光獸",			isCategory : false,	},
				{	Jap : "アウトレイジOMG",					Eng : "Outrage Omega",			Chi : "無法者Ω",		isCategory : false,	},
				{	Jap : "バーサーカー",						Eng : "Berserker",				Chi : "狂戰士",			isCategory : false,	},
				{	Jap : "ホーン・ビースト",					Eng : "Horn Beast",				Chi : "角獸",			isCategory : false,	},
				{	Jap : "リキシ・コマンド・ドラゴン",			Eng : "Rikishi Command Dragon",	Chi : "力士指揮龍",		isCategory : false,	},
				{	Jap : "チルドレン",							Eng : "Children",				Chi : "小屁孩",			isCategory : false,	},
				{	Jap : "ホワイト・コマンド・ドラゴン",		Eng : "White Command Dragon",	Chi : "輝白指揮龍",		isCategory : false,	},
				{	Jap : "メルト・ウォリアー",					Eng : "Melt Warrior",			Chi : "熔爐戰士",		isCategory : false,	},
				{	Jap : "サイバー・ムーン",					Eng : "Cyber Moon",				Chi : "電子月亮",		isCategory : false,	},
				{	Jap : "ビークル・ビー",						Eng : "Vehicle Bee",			Chi : "載具蜂",			isCategory : false,	},
				{	Jap : "デビル・コマンド・ドラゴン",			Eng : "Devil Command Dragon",	Chi : "魔鬼指揮龍",		isCategory : false,	},
				{	Jap : "カレーパン",							Eng : "Curry Bread",			Chi : "咖哩麵包",		isCategory : false,	},
				{	Jap : "ブルー・コマンド・ドラゴン",			Eng : "Blue Command Dragon",	Chi : "蔚藍指揮龍",		isCategory : false,	},
				{	Jap : "アーマード・ワイバーン",				Eng : "Armored Wyvern",			Chi : "裝甲翼龍",		isCategory : false,	},
				{	Jap : "コロニー・ビートル",					Eng : "Colony Beetle",			Chi : "聚落甲蟲",		isCategory : false,	},
				{	Jap : "クリエイター",						Eng : "Creator",				Chi : "創造者",			isCategory : false,	},
				{	Jap : "デビルマスク",						Eng : "Devil Mask",				Chi : "惡魔面具",		isCategory : false,	},
				{	Jap : "アイドル",							Eng : "Idol",					Chi : "偶像明星",		isCategory : false,	},
				{	Jap : "エッグ",								Eng : "Egg",					Chi : "蛋",				isCategory : false,	},
				{	Jap : "ディープ・マリーン",					Eng : "Deep Marine",			Chi : "深海之物",		isCategory : false,	},
				{	Jap : "ツリーフォーク",						Eng : "Tree Folk",				Chi : "樹妖",			isCategory : false,	},
				{	Jap : "デューンゲッコー",					Eng : "Dune Gecko",				Chi : "沙丘壁虎",		isCategory : false,	},
				{	Jap : "リヴァイアサン",						Eng : "Leviathan",				Chi : "海怪",			isCategory : false,	},
				{	Jap : "スペシャル・クライマックス",			Eng : "Special Climax",			Chi : "特異高峰",		isCategory : false,	},
				{	Jap : "スターノイド",						Eng : "Star Man",				Chi : "星人",			isCategory : false,	},
				{	Jap : "ダーク・ナイトメア",					Eng : "Dark Nightmare",			Chi : "黑暗夢魘",		isCategory : false,	},
				{	Jap : "メガ・コマンド・ドラゴン",			Eng : "Mega Command Dragon",	Chi : "巨型指揮龍",		isCategory : false,	},
				{	Jap : "ジャスティス・オーブ",				Eng : "Justice Orb",			Chi : "正義寶玉",		isCategory : false,	},
				{	Jap : "スノーフェアリー風",					Eng : "Snow Fearie Wind",		Chi : "雪妖風",			isCategory : false,	},
				{	Jap : "サイバー・ウイルス海",				Eng : "Cyber Virus Ocean",		Chi : "電子病毒海",		isCategory : false,	},
				{	Jap : "ファイアー・バード炎",				Eng : "Fire Bird Flame",		Chi : "火鳥炎",			isCategory : false,	},
				{	Jap : "ワールド・コマンド・ドラゴン",		Eng : "World Command Dragon",	Chi : "世界指揮龍",		isCategory : false,	},
				{	Jap : "グリーン・コマンド・ドラゴン",		Eng : "Green Command Dragon",	Chi : "碧綠指揮龍",		isCategory : false,	},
				{	Jap : "ソニック・コマンド",					Eng : "Sonic Command",			Chi : "響音指揮",		isCategory : false,	},
				{	Jap : "侵略者",								Eng : "Invader",				Chi : "侵略者",			isCategory : false,	},
				{	Jap : "革命軍",								Eng : "Revolution Army",		Chi : "革命軍",			isCategory : false,	},
				{	Jap : "ガオー・モンスター",					Eng : "Gao Monster",			Chi : "嘶吼獸",			isCategory : false,	},
				{	Jap : "ソウル・コマンド",					Eng : "Soul Command",			Chi : "靈魂指揮",		isCategory : false,	},
				{	Jap : "ガーゴイル",							Eng : "Gargoyle",				Chi : "石像魔",			isCategory : false,	},
				{	Jap : "マジック・コマンド",					Eng : "Magic Command",			Chi : "魔法指揮",		isCategory : false,	},
				{	Jap : "ゲリラ・コマンド",					Eng : "Guerrilla Command",		Chi : "游擊指揮",		isCategory : false,	},
				{	Jap : "???",								Eng : "???",					Chi : "???",			isCategory : false,	},
				{	Jap : "S級侵略者",							Eng : "S Rank Invader",			Chi : "S級侵略者",		isCategory : false,	},
				{	Jap : "イニシャルズ",						Eng : "Initials",				Chi : "字首",			isCategory : false,	},
				{	Jap : "2016 カレンダー",					Eng : "2016 Calendar",			Chi : "2016月曆",		isCategory : false,	},
				{	Jap : "アウトレイジ犬",						Eng : "Outrage Dog",			Chi : "無法者・犬",		isCategory : false,	},
				{	Jap : "アウトレイジ猫",						Eng : "Outrage Cat",			Chi : "無法者・貓",		isCategory : false,	},
				{	Jap : "メタル・コマンド・ドラゴン",			Eng : "Metal Command Dragon",	Chi : "金屬指揮龍",		isCategory : false,	},
				{	Jap : "プレインズ・ウォーカー",				Eng : "Plants Walker",			Chi : "鵬洛客",			isCategory : false,	},
				{	Jap : "ピアニスト",							Eng : "Pianist",				Chi : "鋼琴家",			isCategory : false,	},
				{	Jap : "ワールドアイドル",					Eng : "World Idol",				Chi : "世界巨星",		isCategory : false,	},
				{	Jap : "エルダー・ドラゴン",					Eng : "Elder Dragon",			Chi : "古老龍",			isCategory : false,	},
				{	Jap : "スペシャル・サンクス",				Eng : "Special Thanks",			Chi : "特別感謝",		isCategory : false,	},
				{	Jap : "ナレーター",							Eng : "Narrator",				Chi : "旁白",			isCategory : false,	},
				{	Jap : "ジ・アンサー",						Eng : "The Answer",				Chi : "解答者",			isCategory : false,	},
				{	Jap : "メガ・ドラゴン",						Eng : "Mega Dragon",			Chi : "百萬巨龍",		isCategory : false,	},
				{	Jap : "ハムカツ団",							Eng : "Team HamuKatsu",			Chi : "豬排倉鼠隊",		isCategory : false,	},
				{	Jap : "エンジェル・ドラゴン",				Eng : "Angel Dragon",			Chi : "天使龍",			isCategory : false,	},
				{	Jap : "ドレミ団",							Eng : "Team DoReMi",			Chi : "音階隊",			isCategory : false,	},
				{	Jap : "ダママ団",							Eng : "Team TaMaMa",			Chi : "塔瑪瑪隊",		isCategory : false,	},
				{	Jap : "マスター・イニシャルズ",				Eng : "Master Initials",		Chi : "王者字首",		isCategory : false,	},
				{	Jap : "セイント・ヘッド",					Eng : "Saint Head",				Chi : "聖頭顱",			isCategory : false,	},
				{	Jap : "キマイラ",							Eng : "Chimera",				Chi : "合成獸",			isCategory : false,	},
				{	Jap : "テック団",							Eng : "Team Tech",				Chi : "技術隊",			isCategory : false,	},
				{	Jap : "アクミ団",							Eng : "Team Akumi",				Chi : "亞克米隊",		isCategory : false,	},
				{	Jap : "ジュラシック・ドラゴン",				Eng : "Jurassic Dragon",		Chi : "侏儸紀龍",		isCategory : false,	},
				{	Jap : "デーモン・ドラゴン",					Eng : "Demon Dragon",			Chi : "惡魔龍",			isCategory : false,	},
				{	Jap : "クリスタル・ドラゴン",				Eng : "Crystal Dragon",			Chi : "水晶龍",			isCategory : false,	},
				{	Jap : "スターライト・ツリー",				Eng : "Starlight Tree",			Chi : "星光樹",			isCategory : false,	},
				{	Jap : "ヒューマノイド邪",					Eng : "Human Jya",				Chi : "人類・邪",		isCategory : false,	},
				{	Jap : "ミルクボーイ",						Eng : "Milk Boy",				Chi : "嬰孩",			isCategory : false,	},
				{	Jap : "ガーディアン・コマンド・ドラゴン",	Eng : "Guardian Command Dragon",Chi : "守護者指揮龍",	isCategory : false,	},
				{	Jap : "マスター革命軍",						Eng : "Master Revolution Army",	Chi : "王者革命軍",		isCategory : false,	},
				{	Jap : "侵略者ZERO",							Eng : "Invader ZERO",			Chi : "零式侵略者",		isCategory : false,	},
				{	Jap : "アウトレイジ・ドラゴン",				Eng : "Outrage Dragon",			Chi : "無法之龍",		isCategory : false,	},
				{	Jap : "禁断ソニック・コマンド",				Eng : "Forbidden Sonic Command",Chi : "禁斷音速指揮",	isCategory : false,	},
				{	Jap : "メタリカ",							Eng : "Metallica",				Chi : "金屬造物",		isCategory : false,	},
				{	Jap : "イニシャルズX",						Eng : "Initials X",				Chi : "字首X",			isCategory : false,	},
				{	Jap : "ビートジョッキー",					Eng : "Beat Jockey",			Chi : "撞乘者",			isCategory : false,	},
				{	Jap : "ドラゴンギルド",						Eng : "Dragon Guild",			Chi : "龍裝者",			isCategory : false,	},
				{	Jap : "ジョーカーズ",						Eng : "Joe Cards",				Chi : "喬繪卡",			isCategory : false,	},
				{	Jap : "ムートピア",							Eng : "Mutopia",				Chi : "烏托邦",			isCategory : false,	},
				{	Jap : "マフィ・ギャング",					Eng : "Mafi Gang",				Chi : "黑手黨流氓",		isCategory : false,	},
				{	Jap : "グランセクト",						Eng : "Grand Sect",				Chi : "偉大蟲",			isCategory : false,	},
				{	Jap : "スペシャルズ",						Eng : "Specials",				Chi : "特仕",			isCategory : false,	},
				{	Jap : "チーム切札",							Eng : "Team Kirifuda",			Chi : "王牌隊",			isCategory : false,	},
				{	Jap : "ヒーロー・ドラゴン",					Eng : "Hero Dragon",			Chi : "英雄龍",			isCategory : false,	},
				{	Jap : "デモニオ",							Eng : "Demonio",				Chi : "邪鬼",			isCategory : false,	},
				{	Jap : "鬼札王国",							Eng : "Onifuda Kingdom",		Chi : "鬼牌王國",		isCategory : false,	},
				{	Jap : "ジャイアント・ドラゴン",				Eng : "Giant Dragon",			Chi : "巨龍",			isCategory : false,	},
				{	Jap : "不死樹王国",							Eng : "Undead Tree Kindom",		Chi : "不死樹王國",		isCategory : false,	},
				{	Jap : "チーム銀河",							Eng : "Team Galaxy",			Chi : "銀河隊",			isCategory : false,	},
				{	Jap : "トリックス",							Eng : "Tricks",					Chi : "巧技",			isCategory : false,	},
				{	Jap : "チームウェイブ",						Eng : "Team Wave",				Chi : "波浪隊",			isCategory : false,	},
				{	Jap : "チームボンバー",						Eng : "Team Bomber",			Chi : "炸彈隊",			isCategory : false,	},
				{	Jap : "チーム零",							Eng : "Team Zero",				Chi : "零隊",			isCategory : false,	},
				{	Jap : "月光王国",							Eng : "Moonlight Kindom",		Chi : "月光王國",		isCategory : false,	},
				{	Jap : "美孔麗王国",							Eng : "Bikkuri Kingdom",		Chi : "美孔麗王國",		isCategory : false,	},
				{	Jap : "暴拳王国",							Eng : "Violence Fist Kindom",	Chi : "暴拳王國",		isCategory : false,	},
				{	Jap : "ジョーカーズ・ドラゴン",				Eng : "Jockers Dragon",			Chi : "喬繪卡龍",		isCategory : false,	},
				{	Jap : "オラクル・ドラゴン",					Eng : "Oracle Dragon",			Chi : "神喻龍",			isCategory : false,	},
				{	Jap : "スプラッシュ・クイーン・ドラゴン",	Eng : "Splash Queen Dragon",	Chi : "水花女王龍",		isCategory : false,	},
				{	Jap : "シノビ・ドラゴン",					Eng : "Shinobi Dragon",			Chi : "忍者龍",			isCategory : false,	},
				{	Jap : "ファンキー・ナイトメア・ドラゴン",	Eng : "Funky Nightmare Dragon",	Chi : "怪異夢魘龍",		isCategory : false,	},
				{	Jap : "ヒューマノイド・ドラゴン",			Eng : "Humanoid Dragon",		Chi : "人類龍",			isCategory : false,	},
				{	Jap : "スノーフェアリー・ドラゴン",			Eng : "Snow Fearie Dragon",		Chi : "雪妖龍",			isCategory : false,	},
				{	Jap : "ドリームメイト・ドラゴン",			Eng : "Dream Mate Dragon",		Chi : "夢幻夥伴龍",		isCategory : false,	},
				{	Jap : "ソニック・コマンド・ドラゴン",		Eng : "Sonic CommandDream",		Chi : "音速指揮龍",		isCategory : false,	},
				{	Jap : "ビートジョッキー",					Eng : "Beat Jockey",			Chi : "衝撞騎師",		isCategory : false,	},
				{	Jap : "メカ・デル・ディネロ",				Eng : "Mecha Del Dinero",		Chi : "機械貨幣",		isCategory : false,	},
				{	Jap : "スーパーカー・ドラゴン",				Eng : "Super Car Dragon",		Chi : "超跑龍",			isCategory : false,	},
				{	Jap : "ACE",								Eng : "ACE",					Chi : "王牌",			isCategory : false,	},
				{	Jap : "アビスロイヤル",						Eng : "Abyss Royal",			Chi : "深淵皇家",		isCategory : false,	},
				{	Jap : "レクスターズ",						Eng : "Rex Stars",				Chi : "王星",			isCategory : false,	},
				{	Jap : "鬼レクスターズ",						Eng : "Oni Rex Stars",			Chi : "鬼王星",			isCategory : false,	},
				{	Jap : "ディスペクター",						Eng : "Dispector",				Chi : "褻瀆者",			isCategory : false,	},
				{	Jap : "禁断",								Eng : "Forbidden",				Chi : "禁斷",			isCategory : false,	},
				{	Jap : "ディスタス",							Eng : "Distas",					Chi : "合獸兵",			isCategory : false,	},
				{	Jap : "ファイブ・オリジン・ドラゴン",		Eng : "Five Origin Dragon",		Chi : "五源龍",			isCategory : false,	},
				{	Jap : "ニュー・ワールド・ドラゴン",			Eng : "New World Dragon",		Chi : "新世界龍",		isCategory : false,	},
				{	Jap : "ワールド・ドラゴン",					Eng : "World Dragon",			Chi : "世界龍",			isCategory : false,	},
				{	Jap : "マシン・イーター",					Eng : "Machine Eater",			Chi : "嗜機者",			isCategory : false,	},
				{	Jap : "フェザーノイド",						Eng : "Feathernoid",			Chi : "翼人族",			isCategory : false,	},
				{	Jap : "サイバー・クラスター",				Eng : "Cyber Cluster",			Chi : "電子群集",		isCategory : false,	},
				{	Jap : "メカサンダー",						Eng : "Mecha Thunder",			Chi : "機械雷族",		isCategory : false,	},
				{	Jap : "シー・ハッカー",						Eng : "Sea Hacker",				Chi : "海洋駭客",		isCategory : false,	},
				{	Jap : "フィッシュ",							Eng : "Fish",					Chi : "魚",				isCategory : false,	},
				{	Jap : "リキシ・コマンド",					Eng : "Rikishi Command",		Chi : "力士指揮",		isCategory : false,	},
				{	Jap : "ビッグマッスル",						Eng : "Big Muscle",				Chi : "大筋肉",			isCategory : false,	},
				{	Jap : "ソルトルーパー",						Eng : "Sol Trooper",			Chi : "劍騎兵",			isCategory : false,	},
				{	Jap : "ナーガ",								Eng : "Naga",					Chi : "蛇妖",			isCategory : false,	},
				{	Jap : "ワールド・バード",					Eng : "World Bird",				Chi : "世界鳥",			isCategory : false,	},
				{	Jap : "へドリアン",							Eng : "Headrian",				Chi : "變形妖",			isCategory : false,	},
				{	Jap : "ダイナマイト・ドラゴン",				Eng : "Dynamite",				Chi : "炸彈龍",			isCategory : false,	},
				{	Jap : "ニトロ・ドラゴン",					Eng : "Nitro Dragon",			Chi : "硝酸龍",			isCategory : false,	},
				{	Jap : "ドラゴン・ワールド",					Eng : "Dragon World",			Chi : "龍世界",			isCategory : false,	},
				{	Jap : "ドラグナー・ドラゴン",				Eng : "Draguner Dragon",		Chi : "龍騎兵龍",		isCategory : false,	},
				{	Jap : "サバキスト",							Eng : "Sanctioner",				Chi : "制裁者",			isCategory : false,	},
				{	Jap : "マスター・ドラゴン",					Eng : "Master Dragon",			Chi : "王者龍",			isCategory : false,	},
				{	Jap : "ジャスティス・ウイング",				Eng : "Justice Wing",			Chi : "正義之翼",		isCategory : false,	},
				{	Jap : "∞ドラゴン",							Eng : "Infinity Dragon",		Chi : "無限龍",			isCategory : false,	},
				{	Jap : "∞マスター・ドラゴン",				Eng : "Infinity Master Dragon",	Chi : "無限王者龍",		isCategory : false,	},
				{	Jap : "ゼロ・ドラゴン",						Eng : "Zero Dragon",			Chi : "零之龍",			isCategory : false,	},
				{	Jap : "魔導具",								Eng : "Magic Item",				Chi : "魔導具",			isCategory : false,	},
				{	Jap : "マジック・コマンド・ドラゴン",		Eng : "Magic Command Dragon",	Chi : "魔術指揮龍",		isCategory : false,	},
				{	Jap : "マジック・アースイーター",			Eng : "Magic Earth Eater",		Chi : "魔術嗜地獸",		isCategory : false,	},
				{	Jap : "裁きの紋章",							Eng : "Sanction Heraldry",		Chi : "制裁的紋章",		isCategory : false,	},
				{	Jap : "マジック・ソング",					Eng : "Magic Song",				Chi : "魔法之歌",		isCategory : false,	},
				{	Jap : "マジック・リキッド・ピープル",		Eng : "Magic Liquid People",	Chi : "魔法水人",		isCategory : false,	},
				{	Jap : "マジック・マーフォーク",				Eng : "Magic Merfolk",			Chi : "魔法魚人",		isCategory : false,	},
				{	Jap : "マジック・フィッシュ",				Eng : "Magic Fish",				Chi : "魔法魚",			isCategory : false,	},
				{	Jap : "ドルスザク",							Eng : "Dol Suzaku",				Chi : "大朱雀",			isCategory : false,	},
				{	Jap : "トリニティ・コマンド",				Eng : "Trinity Command",		Chi : "三重指揮",		isCategory : false,	},
				{	Jap : "ゼロリスト",							Eng : "Zerorist",				Chi : "零使",			isCategory : false,	},
				{	Jap : "アダムユニット",						Eng : "Adam Unit",				Chi : "亞當單位",		isCategory : false,	},
				{	Jap : "イブユニット",						Eng : "Eve Unit",				Chi : "夏娃單位",		isCategory : false,	},
				{	Jap : "ドラゴン・コード",					Eng : "Dragon Code",			Chi : "龍代碼",			isCategory : false,	},
				{	Jap : "マスター・ハザード",					Eng : "Master Hazard",			Chi : "王之災害",		isCategory : false,	},
				{	Jap : "バーサーカー・ドラゴン",				Eng : "Berserker Dragon",		Chi : "狂戰士龍",		isCategory : false,	},
				{	Jap : "ガイア・コマンド・ドラゴン",			Eng : "Gaia Command Dragon",	Chi : "大地指揮龍",		isCategory : false,	},
				{	Jap : "メカ・デル・ソル・ドラゴン",			Eng : "Mecha Del Sol Dragon",	Chi : "光器龍",			isCategory : false,	},
				{	Jap : "スピリット・クォーツ・ドラゴン",		Eng : "Spirit Quartz Dragon",	Chi : "靈魂晶礦龍",		isCategory : false,	},
				{	Jap : "ドラゴン",							Eng : "Dragon",					Chi : "龍",				isCategory : false,	},
				{	Jap : "ビーストフォーク・ドラゴン",			Eng : "Beast Folk Dragon",		Chi : "獸人龍",			isCategory : false,	},
				{	Jap : "レインボー・ドラゴン",				Eng : "Rainbow Dragon",			Chi : "虹龍",			isCategory : false,	},
				{	Jap : "アビスドラゴン",						Eng : "Abyss Dragon",			Chi : "深淵龍",			isCategory : false,	},
				{	Jap : "キング・コマンド",					Eng : "King Command",			Chi : "王家指揮",		isCategory : false,	},
				{	Jap : "マジック・スプラッシュ・クイーン",	Eng : "Magic Splash Queen",		Chi : "魔法水花皇后",	isCategory : false,	},
				{	Jap : "ジャイアント・スノーフェアリー",		Eng : "Giant Fearie",			Chi : "巨大妖精",		isCategory : false,	},
				{	Jap : "マナ・バード",						Eng : "Mana Bird",				Chi : "魔力鳥",			isCategory : false,	},
				{	Jap : "マジック・サイバー・ムーン",			Eng : "Magic Cyber Moon",		Chi : "魔法電子月",		isCategory : false,	},
				{	Jap : "アーマード・ファイアー・バード",		Eng : "Armored Fire Bird",		Chi : "裝甲火鳥",		isCategory : false,	},
				{	Jap : "メカ・デル・ステラ",					Eng : "Mecha Del Stella",		Chi : "金屬星星",		isCategory : false,	},
				{	Jap : "マジック・サイバーロード",			Eng : "Magic Cyber Lord",		Chi : "魔法電子領主",	isCategory : false,	},
				{	Jap : "メガ・アーマード・コマンド・ドラゴン",
																Eng : "Mega Armored Command Dragon",
																								Chi : "百萬裝甲指揮龍",	isCategory : false,	},
				

				{	Jap : "コマンド",							Eng : "Command",				Chi : "指揮",			isCategory : true,	},
				{	Jap : "コマンド・ドラゴン",					Eng : "Command Dragon",			Chi : "指揮龍",			isCategory : true,	},
				{	Jap : "サイバー",							Eng : "Cyber",					Chi : "電子",			isCategory : true,	},
				{	Jap : "モンスター",							Eng : "Monster",				Chi : "獸族",			isCategory : true,	},
				{	Jap : "ナイトメア",							Eng : "Nightmare",				Chi : "夢魘",			isCategory : true,	},
				{	Jap : "マジック",							Eng : "Magic",					Chi : "魔法",			isCategory : true,	},
				{	Jap : "アビス",								Eng : "Abyss",					Chi : "深淵",			isCategory : true,	},
				
				/*
				{	Jap : "",						Eng : "",					Chi : "",			isCategory : false,	},
				*/
			],
		
		//用日文種族名去取得種族資料
		getDataByJap : function( value ){
			for ( var i = 0 ; i < this.map.length ; i++ ){
				if ( this.map[i].Jap == value ){
					return this.map[i];
				}
			}
			return null;
		},
		
		//將日文種族名轉成英文種族名
		transJapToEng : function( value ){
			var theData = this.getDataByJap( value );
			return theData == null ? null : theData.Eng;
		},
		
		//將日文種族名轉成中文種族名
		transJapToChi : function( value ){
			var theData = this.getDataByJap( value );
			return theData == null ? null : theData.Chi;
		},
		
	}
	