﻿/**
 * 存储所有的静态变量
 * 属于工具类，放在AP中
 */

define([], function() {
    'use strict';
    class Constant {}
    
    //Constants
    Constant.TEST = false;
    Constant.DEFAULT_PAGE = 'login';
    Constant.SKIP_AUTH = true;
    Constant.DEFAULT_FACE = '/images/defaultUser.jpg';
    Constant.DEFAULT_EMAIL = '邮箱地址';
    Constant.DEFAULT_INTRO = '说点什么？';
    Constant.DEFAULT_STATUS = '/images/online.png',
    Constant.DEFAULT_GROUPS = [{name: '默认分组', users: []}],
    Constant.DEFAULT_CHATTINGS = [];
    Constant.DEFAULT_CURRENT = {};

    //For User
    //Constant.BASE_SERVER = 'http://renhongl.viphk.ngrok.org/';
    //Constant.WS_SERVER = 'ws://lrh.ws.viphk.ngrok.org/';

    Constant.BASE_SERVER = 'http://127.0.0.1:8080/';
    Constant.WS_SERVER = 'ws://127.0.0.1:9090/';

    Constant.LOGIN = Constant.BASE_SERVER + 'login';
    Constant.REGISTER = Constant.BASE_SERVER + 'register';
    Constant.GET_INFOR = Constant.BASE_SERVER + 'getInfor';
    Constant.SET_INFOR = Constant.BASE_SERVER + 'setInfor';
    Constant.QUERY_ALL = Constant.BASE_SERVER + 'queryAll';
    Constant.QUERY_BY_NAME = Constant.BASE_SERVER + 'queryByName';
    Constant.ADD_TO_GROUP = Constant.BASE_SERVER + 'addToGroup';
    Constant.REMOVE_USER = Constant.BASE_SERVER + 'removeUser';
    
    //For Records
    Constant.GETRECORDS = Constant.BASE_SERVER + 'getRecord';
    Constant.SAVERECORDS = Constant.BASE_SERVER + 'saveRecord';

    //For Comment
    Constant.GET_COMMENT = Constant.BASE_SERVER + 'getComment';
    Constant.SAVE_COMMENT = Constant.BASE_SERVER + 'saveComment';
    Constant.UPDATE_COMMENT = Constant.BASE_SERVER + 'updateComment';

    //For reset
    Constant.GET_CODE = Constant.BASE_SERVER + 'getCode';
    
    return Constant;
});