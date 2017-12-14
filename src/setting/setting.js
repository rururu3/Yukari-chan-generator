//---------------------------------------------------------------------------------
// Yukari-chan generator
// (C) 2017.12.08 @melty_pot
//---------------------------------------------------------------------------------
//セットリスト
export const SetList = [
	{ name: 'FACE' },
	{ name: 'HEAD' },
	{ name: 'HAIR' },
	{ name: 'CLOTH' },
	{ name: 'BODY' },
	{ name: 'SHOES' }
];

//パーツリスト
export const PartsList = [
	{ name: 'FACE',   set: 'FACE',  zindex: 100 },
	{ name: 'HEAD',   set: 'HEAD',  zindex: 80 },	// 80 10
	{ name: 'HAIR',   set: 'HAIR',  zindex: 70 },	// 75 70 15
	{ name: 'CAPE',   set: 'CLOTH', zindex: 55 },	// 55 20
	{ name: 'TOPS',   set: 'CLOTH', zindex: 50 },	// 50 25
	{ name: 'BOTTOM', set: 'CLOTH', zindex: 45 },	// 45
	{ name: 'BRA',    set: 'BODY',  zindex: 35 },	// 35
	{ name: 'PANTS',  set: 'BODY',  zindex: 35 },	// 35
	{ name: 'LEGS',   set: 'BODY',  zindex: 35 },	// 35
	{ name: 'SHOES',  set: 'SHOES', zindex: 40 }	// 40 30
];

// デフォルト
export const DefaultImages = ['face_00', 'hair_00', 'bra_00', 'pants_00', 'legs_00'];

//パーツデータ
export const ImageList = [
	{	name: 'face_00',
		parts: ['FACE'],
		image: [
			{ src: 'images/face_00.png', pos: 0 }
		]
	},
	{	name: 'face_01',
	parts: ['FACE'],
	image: [
			{ src: 'images/face_01.png', pos: 0 }
		]
	},
	{	name: 'face_02',
	parts: ['FACE'],
	image: [
			{ src: 'images/face_02.png', pos: 0 }
		]
	},
	{	name: 'head_01',
		parts: ['HEAD'],
		image: [
			{ src: 'images/head_01_1.png', pos: 0 },
			{ src: 'images/head_01_2.png', pos: -70 }	//10
		]
	},
	{	name: 'head_02',
	parts: ['HEAD'],
	image: [
			{ src: 'images/head_02.png', pos: 0 },
		]
	},
	{	name: 'hair_00',
		parts: ['HAIR'],
		image: [
			{ src: 'images/hair_00_1.png', pos: 5 },	//75
			{ src: 'images/hair_00_2.png', pos: 0 },
			{ src: 'images/hair_00_3.png', pos: -55 }	//15
		]
	},
	{	name: 'cape_01',
		parts: ['CAPE'],
		image: [
			{ src: 'images/cape_01_1.png', pos: 0 },
			{ src: 'images/cape_01_2.png', pos: -35 }	//20
		]
	},
	{	name: 'tops_01',
		parts: ['TOPS'],
		image: [
			{ src: 'images/tops_01_1.png', pos: 0 },
			{ src: 'images/tops_01_2.png', pos: -25 }	//25
		]
	},
	{	name: 'tops_02',
		parts: ['TOPS'],
		image: [
			{ src: 'images/tops_02_1.png', pos: 0 },
			{ src: 'images/tops_02_2.png', pos: -25 }
		]
	},
	{	name: 'tops_03',
		parts: ['TOPS'],
		image: [
			{ src: 'images/tops_03.png', pos: 0 }
		]
	},
	{	name: 'bottom_01',
		parts: ['BOTTOM'],
		image: [
			{ src: 'images/bottom_01.png', pos: 0 }
		]
	},
	{	name: 'bottom_02',
	parts: ['BOTTOM'],
	image: [
			{ src: 'images/bottom_02.png', pos: 0 }
		]
	},
	{	name: 'bottom_03',
	parts: ['BOTTOM'],
	image: [
			{ src: 'images/bottom_03.png', pos: 0 }
		]
	},
	{	name: 'onepiece_01',
		parts: ['TOPS', 'BOTTOM'],
		image: [
			{ src: 'images/onepiece_01_1.png', pos: 0 },
			{ src: 'images/onepiece_01_2.png', pos: -25 }	//25
		]
	},
	{	name: 'onepiece_02',
		parts: ['TOPS', 'BOTTOM'],
		image: [
			{ src: 'images/onepiece_02_1.png', pos: 0 },
			{ src: 'images/onepiece_02_2.png', pos: -25 }	//25
		]
	},
	{	name: 'bra_00',
		parts: ['BRA'],
		image: [
			{ src: 'images/bra_00.png', pos: 0 }
		]
	},
	{	name: 'bra_01',
	parts: ['BRA'],
	image: [
			{ src: 'images/bra_01.png', pos: 0 }
		]
	},
	{	name: 'bra_02',
	parts: ['BRA'],
	image: [
			{ src: 'images/bra_02.png', pos: 0 }
		]
	},
	{	name: 'bra_03',
	parts: ['BRA'],
	image: [
			{ src: 'images/bra_03.png', pos: 0 }
		]
	},
	{	name: 'bra_04',
	parts: ['BRA'],
	image: [
			{ src: 'images/bra_04.png', pos: 0 }
		]
	},
	{	name: 'pants_00',
		parts: ['PANTS'],
		image: [
			{ src: 'images/pants_00.png', pos: 0 }
		]
	},
	{	name: 'pants_01',
	parts: ['PANTS'],
	image: [
			{ src: 'images/pants_01.png', pos: 0 }
		]
	},
	{	name: 'pants_02',
	parts: ['PANTS'],
	image: [
			{ src: 'images/pants_02.png', pos: 0 }
		]
	},
	{	name: 'pants_03',
	parts: ['PANTS'],
	image: [
			{ src: 'images/pants_03.png', pos: 0 }
		]
	},
	{	name: 'pants_04',
	parts: ['PANTS'],
	image: [
			{ src: 'images/pants_04.png', pos: 0 }
		]
	},
	{	name: 'legs_00',
		parts: ['LEGS'],
		image: [
			{ src: 'images/legs_00.png', pos: 0 }
		]
	},
	{	name: 'legs_01',
	parts: ['LEGS'],
	image: [
			{ src: 'images/legs_01.png', pos: 0 }
		]
	},
	{	name: 'legs_02',
	parts: ['LEGS'],
	image: [
			{ src: 'images/legs_02.png', pos: 0 }
		]
	},
	{	name: 'tights_01',
		parts: ['PANTS', 'LEGS'],
		image: [
			{ src: 'images/tights_01.png', pos: 0 }
		]
	},
	{	name: 'tights_02',
		parts: ['PANTS', 'LEGS'],
		image: [
			{ src: 'images/tights_02.png', pos: 0 }
		]
	},
	{	name: 'shoes_01',
		parts: ['SHOES'],
		image: [
			{ src: 'images/shoes_01_1.png', pos: 0 },
			{ src: 'images/shoes_01_2.png', pos: -10 }	//30
		]
	},
	{	name: 'shoes_02',
	parts: ['SHOES'],
	image: [
			{ src: 'images/shoes_02.png', pos: 0 }
		]
	},
	{	name: 'shoes_03',
	parts: ['SHOES'],
	image: [
			{ src: 'images/shoes_03.png', pos: 0 }
		]
	}
];
