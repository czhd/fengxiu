<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
	/**
	 * 首页主题
	 */
    public function theme()
    {
        $theme = '{
        "id": 1,
        "title": "清凉一夏，折扣季",
        "description": "秋天是金色的。麦穗是金色的，秋阳是金色的。虽然冬快至，但宜人的温度总是让我们心情愉快#我们为您精选了一系列秋冬折扣商品，慢慢挑选吧~",
        "name": "t-1",
        "entrance_img": "http://i2.sleeve.7yue.pro/m2.png",
        "extend": null,
        "internal_top_img": "http://i2.sleeve.7yue.pro/m33.png",
        "title_img": "",
        "tpl_name": "janna",
        "online": true
	}';
		$theme = json_decode($theme, true);
        return $theme;
	}
	
	/**
	 * 首页轮播图
	 */
	public function banner()
	{
		$banners = '{
			"id": 1,
			"name": "b-1",
			"description": "首页顶部主banner",
			"img": null,
			"title": null,
			"items": [
				{
					"id": 12,
					"img": "http://i2.sleeve.7yue.pro/m1.png",
					"keyword": "t-2",
					"type": 3,
					"name": null,
					"banner_id": 1
				},
				{
					"id": 13,
					"img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
					"keyword": "23",
					"type": 1,
					"name": null,
					"banner_id": 1
				},
				{
					"id": 14,
					"img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
					"keyword": "24",
					"type": 1,
					"name": null,
					"banner_id": 1
				}
			]
		}';
		$banners = json_decode($banners, true);
		return $banners;
	}

	/**
	 * 六宫格
	 */
	public function grid()
	{
		$grids = '[{
			"id": 1,
			"title": "服装",
			"img": "http://i1.sleeve.7yue.pro/grid/clothing.png",
			"name": null,
			"category_id": null,
			"root_category_id": 2
		},
		{
			"id": 2,
			"title": "包包",
			"img": "http://i1.sleeve.7yue.pro/grid/bag.png",
			"name": null,
			"category_id": null,
			"root_category_id": 3
		},
		{
			"id": 3,
			"title": "鞋",
			"img": "http://i1.sleeve.7yue.pro/grid/shoes.png",
			"name": null,
			"category_id": null,
			"root_category_id": 1
		},
		{
			"id": 4,
			"title": "饰品",
			"img": "http://i1.sleeve.7yue.pro/grid/jewelry.png",
			"name": null,
			"category_id": null,
			"root_category_id": 5
		},
		{
			"id": 5,
			"title": "居家",
			"img": "http://i1.sleeve.7yue.pro/grid/furniture.png",
			"name": null,
			"category_id": null,
			"root_category_id": 4
		},
		{
			"id": 6,
			"title": "工艺",
			"img": "http://i1.sleeve.7yue.pro/grid/book.png",
			"name": null,
			"category_id": null,
			"root_category_id": 24
		}]';
		$grids = json_decode($grids, true);
		return $grids;
	}

	/**
	 * 领取优惠券
	 */
	public function activity()
	{
		$activity = '{
			"id": 2,
			"title": "夏日好礼送不停",
			"entrance_img": "http://i2.sleeve.7yue.pro/m14.png",
			"online": true,
			"remark": "限服装、鞋、文具等商品",
			"start_time": null,
			"end_time": null
		}';
		$activity = json_decode($activity, true);
		return $activity;
	}

	/**
	 * 多组主题
	 */
	public function themes()
	{
		$themes = '[
			{
				"id": 1,
				"title": "清凉一夏，折扣季",
				"description": "秋天是金色的。麦穗是金色的，秋阳是金色的。虽然冬快至，但宜人的温度总是让我们心情愉快#我们为您精选了一系列秋冬折扣商品，慢慢挑选吧~",
				"name": "t-1",
				"entrance_img": "http://i2.sleeve.7yue.pro/m2.png",
				"extend": null,
				"internal_top_img": "http://i2.sleeve.7yue.pro/m33.png",
				"title_img": "",
				"tpl_name": "janna",
				"online": true
			},
			{
				"id": 4,
				"title": "每周上新",
				"description": "风袖`每周上新`活动#每周都有一款折扣商品，每周都有适合你的唯一专属#有Ins复古风装饰；金属CD唱片夹；每周来逛逛，找到你所喜爱的东西",
				"name": "t-2",
				"entrance_img": null,
				"extend": null,
				"internal_top_img": "http://i2.sleeve.7yue.pro/m1.png",
				"title_img": "http://i2.sleeve.7yue.pro/m3.png",
				"tpl_name": null,
				"online": true
			},
			{
				"id": 5,
				"title": "风袖甄选",
				"description": "甄选",
				"name": "t-3",
				"entrance_img": "http://i2.sleeve.7yue.pro/m9.png",
				"extend": null,
				"internal_top_img": "http://i2.sleeve.7yue.pro/m11.png",
				"title_img": "",
				"tpl_name": "diana",
				"online": true
			},
			{
				"id": 6,
				"title": "时尚穿搭",
				"description": "帅点才有女朋友",
				"name": "t-4",
				"entrance_img": "http://i2.sleeve.7yue.pro/m10.png",
				"extend": null,
				"internal_top_img": "http://i2.sleeve.7yue.pro/m12.png",
				"title_img": "",
				"tpl_name": "irelia",
				"online": true
			}
		]';
		$themes = json_decode($themes, true);
		return $themes;
	}

	/**
	 * 获取单个专题的详情（含Spu数据）
	 */
	public function themeSpu()
	{
		$theme = '{
			"id": 4,
			"title": "每周上新",
			"description": "风袖`每周上新`活动#每周都有一款折扣商品，每周都有适合你的唯一专属#有Ins复古风装饰；金属CD唱片夹；每周来逛逛，找到你所喜爱的东西",
			"name": "t-2",
			"entrance_img": null,
			"extend": null,
			"internal_top_img": "http://i2.sleeve.7yue.pro/m1.png",
			"title_img": "http://i2.sleeve.7yue.pro/m3.png",
			"tpl_name": null,
			"online": true,
			"spu_list": [
				{
					"id": 23,
					"title": "双色牛仔裤",
					"subtitle": "秋冬新款，做一个Cool Boy",
					"img": "http://i2.sleeve.7yue.pro/n11.png",
					"for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
					"price": "1399",
					"discount_price": null,
					"description": null,
					"tags": "",
					"sketch_spec_id": "1",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 10,
					"title": "碳素墨水",
					"subtitle": "虽然我们早已不再使用钢笔书写，但钢笔在纸上划过的笔触永远是键盘无法替代的。一只钢笔+一瓶墨水在一个安静的午后，写写内心的故事。",
					"img": "http://i2.sleeve.7yue.pro/m24.png",
					"for_theme_img": "",
					"price": "80.00",
					"discount_price": "69.00",
					"description": null,
					"tags": "",
					"sketch_spec_id": null,
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 3,
					"title": "抹茶小橡皮",
					"subtitle": "小作文写错了，用它擦一擦",
					"img": "http://i2.sleeve.7yue.pro/m17.png",
					"for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
					"price": "29.99",
					"discount_price": "17.00",
					"description": null,
					"tags": "一飞推荐",
					"sketch_spec_id": "1",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 15,
					"title": "多彩别针、回形针",
					"subtitle": "每盒70个，可爱多彩",
					"img": "http://i2.sleeve.7yue.pro/m26.png",
					"for_theme_img": null,
					"price": "24",
					"discount_price": "19.9",
					"description": null,
					"tags": "三色可选",
					"sketch_spec_id": "1",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 14,
					"title": "Ins 复古小夹子（Mini)",
					"subtitle": "静静的，享受时光的流逝",
					"img": "http://i2.sleeve.7yue.pro/m23.png",
					"for_theme_img": null,
					"price": "19.9",
					"discount_price": null,
					"description": null,
					"tags": "三色可选",
					"sketch_spec_id": null,
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 8,
					"title": "Ins复古碎花NoteBook",
					"subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
					"img": "http://i2.sleeve.7yue.pro/m19.png",
					"for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
					"price": "29.99",
					"discount_price": "27.8",
					"description": null,
					"tags": "林白推荐",
					"sketch_spec_id": "1",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 28,
					"title": "Ins复古金色落地灯",
					"subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
					"img": "http://i2.sleeve.7yue.pro/a9.png",
					"for_theme_img": "",
					"price": "999",
					"discount_price": null,
					"description": null,
					"tags": "Ins$复古流行",
					"sketch_spec_id": "8",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				},
				{
					"id": 26,
					"title": "SemiConer柔质沙发",
					"subtitle": "窝在沙发上，一杯红酒配电影",
					"img": "http://i2.sleeve.7yue.pro/3.png",
					"for_theme_img": "",
					"price": "4799",
					"discount_price": "4200",
					"description": null,
					"tags": "",
					"sketch_spec_id": "1",
					"max_purchase_quantity": null,
					"min_purchase_quantity": null
				}
			]
		}';
		$theme = json_decode($theme, true);
		return $theme;
	}
}
