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
}
