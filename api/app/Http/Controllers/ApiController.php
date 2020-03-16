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
}
