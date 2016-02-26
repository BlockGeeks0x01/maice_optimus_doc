define({ "api": [
  {
    "type": "post",
    "url": "/api/answer/:id/comments/:id",
    "title": "对一个回答发表评论",
    "name": "CreateOneAnswerComment",
    "group": "Answer",
    "permission": [
      {
        "name": "登录"
      },
      {
        "name": "认证"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"is_anonymous\": false,\n    \"content\": \"回复评论2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/answer/:id/self",
    "title": "获取我的回答",
    "name": "GetMyAnswer",
    "group": "Answer",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"content\": \"\\u9759\\u89c2\\u5176\\u53d8\",\n        \"id\": 100128,\n        \"is_anonymous\": 1,\n        \"recommend\": -1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/api/answer/:id",
    "title": "一个回答",
    "name": "GetOneAnswer",
    "group": "Answer",
    "description": "<p>查询一个回答的详情</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"content\": \"回答内容\",\n        \"is_me\": true,\n        \"user\": {\n            \"avatar\": \"/m/img/anon_avatar.png\",\n            \"name\": \"\\u533f\\u540d\\u7528\\u6237\"\n        },\n        \"recommend\": -1,\n        \"agree_num\": -1,\n        \"comment_num\": 1,\n        \"question\": {\n            \"id\": 100079,\n            \"title\": \"问题title\"\n        },\n        \"id\": 100128,\n        \"modified_time\": \"2016-02-26T14:40:30\"\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/api/answer/:id/comments",
    "title": "一个回答的评论列表",
    "name": "GetOneAnswerComments",
    "group": "Answer",
    "description": "<p>查询一个回答的评论列表</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [{\n        \"to_user\": null,\n        \"content\": \"评论内容\",\n        \"is_questioner_to\": false,\n        \"user\": {\n            \"avatar\": \"/m/img/anon_avatar.png\",\n            \"name\": \"\\u533f\\u540d\\u7528\\u6237\"\n        },\n        \"created_time\": \"2016-02-26T14:49:48\",\n        \"is_author\": true,\n        \"agree_num\": 0,\n        \"id\": 100105,\n        \"is_author_to\": false,\n        \"is_questioner\": true\n    }],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer"
  },
  {
    "type": "post",
    "url": "/api/answer/:id",
    "title": "更新一个回答",
    "name": "UpdateOneAnswer",
    "group": "Answer",
    "permission": [
      {
        "name": "登录"
      },
      {
        "name": "认证"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"content\": \"静观其变吧\",\n    \"id\": 100128,\n    \"is_anonymous\": 1,\n    \"recommend\": -1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/answer/:id/vote",
    "title": "对一个回答投票",
    "name": "VoteOneAnswer",
    "group": "Answer",
    "description": "<p>对一个回答投票</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "agree",
            "description": "<p>是否赞同true/false</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/answer.py",
    "groupTitle": "Answer",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"User already voted the answer\",\n    \"ec\": 204001\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/certificate/picture_path",
    "title": "认证状态",
    "name": "GetCertificateStatus",
    "group": "Certificate",
    "description": "<p>获取用户认证状态</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "certificate_status",
            "description": "<p>认证状态(-1未上传，0审核中，1审核通过，2审核未通过)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"certificate_status\": -1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/certificate.py",
    "groupTitle": "Certificate"
  },
  {
    "type": "post",
    "url": "/api/certificate/picture_path",
    "title": "上传认证照片",
    "name": "PostCertificatePicture",
    "group": "Certificate",
    "description": "<p>上传用户认证照片</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "picture_path",
            "description": "<p>照片URI</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/certificate.py",
    "groupTitle": "Certificate"
  },
  {
    "type": "get",
    "url": "/api/answer/:id/comments/:id",
    "title": "点赞一个评论",
    "name": "VoteOneComment",
    "group": "Comment",
    "permission": [
      {
        "name": "登录"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>点赞数</p> "
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"data\": 1,\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/comment.py",
    "groupTitle": "Comment",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"User already voted the comment\",\n    \"ec\": 206001\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/event/:id/apply",
    "title": "活动报名",
    "name": "ApplyEvent",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/event/:id",
    "title": "一个活动详情",
    "name": "GetEventDetail",
    "group": "Event",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"status\": 1,\n        \"speaker_title\": \"发起人头衔\",\n        \"brief_intro\": \"活动介绍\",\n        \"speaker\": \"发起人\",\n        \"open_time\": \"2016-02-28T13:00:00\",\n        \"title\": \"\",\n        \"speaker_intro\": \"发起人介绍\",\n        \"city\": \"\\u676d\\u5dde\",\n        \"id\": 11\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/event",
    "title": "活动列表",
    "name": "GetEventList",
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://www.imaice.com/api/event/?page=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": false,\n        \"items\": [{\n            \"status\": 1,\n            \"speaker_title\": \"发起人头衔\",\n            \"speaker\": \"发起人\",\n            \"open_time\": \"2016-02-28T13:00:00\",\n            \"title\": \"活动title\",\n            \"speaker_intro\": \"发起人介绍\",\n            \"city\": \"杭州\",\n            \"id\": 11\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "description": "<p>上传文件</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "picture_path",
            "description": "<p>照片URI</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"ec\": 0,\n    \"data\": \"/file/100091\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/filestorage.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/invite/:user_id/topic/:topic_id",
    "title": "作用未知",
    "name": "GetInviteTopic",
    "group": "Invite",
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/invite.py",
    "groupTitle": "Invite",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/invite/:user_id/question/:question_id",
    "title": "邀请用户回答问题",
    "name": "InviteAnswerQuestion",
    "group": "Invite",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/invite.py",
    "groupTitle": "Invite",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"Already invited\",\n    \"ec\": 202001\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/invite/:user_id/topic/:topic_id",
    "title": "邀请用户参与话题讨论",
    "name": "InviteTopic",
    "group": "Invite",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/invite.py",
    "groupTitle": "Invite",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"Already invited\",\n    \"ec\": 202001\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/notification",
    "title": "获取未读消息",
    "name": "UnreadNotification",
    "group": "Notification",
    "description": "<p>获取未读消息</p> ",
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/notification.py",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/api/notification/count",
    "title": "获取未读消息数",
    "name": "UnreadNotificationCount",
    "group": "Notification",
    "description": "<p>获取未读消息数</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/notification.py",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/notification/:id",
    "title": "读取一条消息",
    "name": "readOneNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "登录"
      }
    ],
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/notification.py",
    "groupTitle": "Notification",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/oss/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "Oss",
    "description": "<p>获取OSS授权Token</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"dsadsd9ksadd9dsdsaf9a=s9\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/oss.py",
    "groupTitle": "Oss"
  },
  {
    "type": "get",
    "url": "/api/product/org_types",
    "title": "机构类型",
    "name": "GetOrgTypes",
    "group": "Product",
    "description": "<p>获取机构类型列表</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "certificate_status",
            "description": "<p>认证状态(-1未上传，0审核中，1审核通过，2审核未通过)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [\n        [6, \"保险\"],\n        [1, \"信托计划\"],\n        [5, \"公募基金\"],\n        [4, \"契约型基金\"],\n        [3, \"有限合伙\"],\n        [2, \"资管计划\"]\n    ],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/question/:id/answers",
    "title": "回答一个提问",
    "name": "AnswerOneQuestion",
    "group": "Question",
    "description": "<p>回答一个提问</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"unlock_time\": 0,\n    \"recommend\": -1,\n    \"is_anonymous\": 1,\n    \"content\": \"静观其变\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/question/invite",
    "title": "邀请回答用户列表",
    "name": "GetInviteUserList",
    "group": "Question",
    "description": "<p>获取邀请回答用户列表</p> ",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [{\n        \"intro\": null,\n        \"id\": 100001,\n        \"name\": \"\\u97e9\\u79cb\",\n        \"avatar\": \"img/no_avatar.gif\"\n    }, {\n        \"intro\": \"\\u60f3\\u5b89\\u5b89\\u9759\\u9759\\u7684\\u505a\\u4e2a\\u79c1\\u4eba\\u94f6\\u884c\\u5bb6\",\n        \"id\": 100006,\n        \"name\": \"\\u5f3a\\u54e5\",\n        \"avatar\": \"/file/100002\"\n    }, {\n        \"intro\": \"\\u8d70\\u5728\\u6572\\u949f\\u8def\\u4e0a\\u7684\\u5927\\u5e08\\u5144\",\n        \"id\": 100008,\n        \"name\": \"\\u5927\\u5e08\\u5144\\u6765\\u4e86\",\n        \"avatar\": \"/file/100049\"\n    }],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>用户昵称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "intro",
            "description": "<p>用户简介</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/api/questions/:id/self",
    "title": "我的某个问题详情",
    "name": "GetMyOneQuestion",
    "group": "Question",
    "description": "<p>查询我的某个问题详情</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"files\": [],\n        \"description\": \"问题描述\",\n        \"is_anonymous\": 1,\n        \"tags\": [{\n            \"id\": 6,\n            \"name\": \"股票\"\n        }],\n        \"title\": \"问题标题\",\n        \"product_name\": \"产品名称\",\n        \"id\": 100079\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/api/questions/:id",
    "title": "一个问题的详情",
    "name": "GetOneQuestion",
    "group": "Question",
    "description": "<p>查询一个问题的详情</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"answers_count\": 1,\n        \"question\": {\n            \"files\": [],\n            \"recommend_num\": 0,\n            \"description\": \"\\u5218\\u603b\\u7684\\u7ea2\\u5305\\u6d3e\\u53d1\\u5b8c\\u4e86\\uff1f\",\n            \"tags\": [\"\\u80a1\\u7968\"],\n            \"not_recommend_num\": 0,\n            \"user\": {\n                \"avatar\": \"/m/img/anon_avatar.png\",\n                \"name\": \"\\u533f\\u540d\\u7528\\u6237\"\n            },\n            \"created_time\": \"2016-02-26T10:45:15\",\n            \"product_id\": null,\n            \"title\": \"\\u8bc1\\u76d1\\u4f1a\\u65b0\\u638c\\u95e8\\u4e0a\\u4efb\\u540e\\uff0cA\\u80a1\\u5f00\\u95e8\\u7ea2\\u540e\\u518d\\u6b21\\u66b4\\u8dcc\\uff0c\\u5927\\u5bb6\\u600e\\u4e48\\u770b\",\n            \"is_me\": true,\n            \"product_name\": \"\\u80a1\\u5e02\"\n        },\n        \"answers\": [{\n            \"content\": \"\\u9759\\u89c2\\u5176\\u53d8\",\n            \"created_time\": \"2016-02-26T14:40:30\",\n            \"user\": {\n                \"avatar\": \"/m/img/anon_avatar.png\",\n                \"name\": \"\\u533f\\u540d\\u7528\\u6237\"\n            },\n            \"recommend\": -1,\n            \"agree_num\": 0,\n            \"comment_num\": 0,\n            \"id\": 100128,\n            \"view_num\": 0\n        }]\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/api/questions",
    "title": "问题列表",
    "name": "GetQuestionList",
    "group": "Question",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": true,\n        \"items\": [{\n            \"recommend_num\": 1,\n            \"description\": \"问题描述\",\n            \"tags\": [\"\\u80a1\\u7968\"],\n            \"not_recommend_num\": 0,\n            \"expected_time\": null,\n            \"created_time\": \"2016-02-25T09:44:30\",\n            \"id\": 100078,\n            \"title\": \"问题title\",\n            \"view_num\": 10,\n            \"comments_count\": 1,\n            \"answer\": {\n                \"comment_num\": 1,\n                \"modified_time\": \"2016-02-25T09:47:04\",\n                \"content\": \"回答内容\",\n                \"user\": {\n                    \"avatar\": \"/m/img/anon_avatar.png\",\n                    \"name\": \"\\u533f\\u540d\\u7528\\u6237\"\n                },\n                \"agree_num\": 1,\n                \"id\": 100125\n            },\n            \"file_num\": 0,\n            \"answers_count\": 1\n        }, {\n            \"recommend_num\": 0,\n            \"description\": \"问题描述\",\n            \"tags\": [\"\\u4fdd\\u9669\"],\n            \"not_recommend_num\": 0,\n            \"expected_time\": null,\n            \"created_time\": \"2016-02-23T17:31:22\",\n            \"id\": 100076,\n            \"title\": \"问题title\",\n            \"view_num\": 13,\n            \"comments_count\": 0,\n            \"file_num\": 0,\n            \"answers_count\": 0\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/api/questions",
    "title": "发布问题",
    "name": "PostQuestion",
    "group": "Question",
    "description": "<p>发布新问题</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "expected_time",
            "description": "<p><s>期望回答时间(没有使用)</s></p> "
          },
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "is_anonymous",
            "description": "<p>是否匿名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>list</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>附件列表</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>list</p> ",
            "optional": false,
            "field": "invites",
            "description": "<p>邀请回答用户ID列表</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>object[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>标签</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "tags.id",
            "description": "<p>标签ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>标签名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"证监会新掌门上任后，A股开门红后再次暴跌，大家怎么看\",\n    \"expected_time\": 0,\n    \"description\": \"刘总的红包派发完了？\",\n    \"tags\": [{\n        \"id\": 6,\n        \"name\": \"股票\"\n    }],\n    \"is_anonymous\": true,\n    \"files\": [],\n    \"invites\": [100001]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>问题ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"id\": 100079\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/api/questions/:id",
    "title": "更新某个问题",
    "name": "UpdateOneQuestion",
    "group": "Question",
    "description": "<p>更新某个问题</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"files\": [],\n    \"description\": \"刘总的红包派发完了？\",\n    \"is_anonymous\": 1,\n    \"tags\": [{\n        \"id\": 6,\n        \"name\": \"股票\"\n    }],\n    \"title\": \"证监会新掌门上任后，A股开门红后再次暴跌，大家怎么看\",\n    \"product_name\": \"股市\",\n    \"id\": 100079,\n    \"product_org_type\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/question.py",
    "groupTitle": "Question",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/search/question",
    "title": "搜索问题",
    "name": "SearchQuestion",
    "group": "Search",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": false,\n        \"items\": [{\n            \"answer_num\": 2,\n            \"id\": 100014,\n            \"view_num\": 20,\n            \"title\": \"问题title\"\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/search.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/search/topic",
    "title": "搜索话题",
    "name": "SearchTopic",
    "group": "Search",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": false,\n        \"items\": [{\n            \"comment_num\": 0,\n            \"id\": 100003,\n            \"view_num\": 0,\n            \"title\": \"话题title\"\n        }, {\n            \"comment_num\": 0,\n            \"id\": 100006,\n            \"view_num\": 0,\n            \"title\": \"话题title\"\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/search.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/search/user",
    "title": "搜索用户",
    "name": "SearchUser",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "key",
            "description": "<p>搜索关键字</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": false,\n        \"items\": [{\n            \"intro\": null,\n            \"id\": 100001,\n            \"name\": \"\\u97e9\\u79cb\",\n            \"avatar\": \"img/no_avatar.gif\"\n        }, {\n            \"intro\": null,\n            \"id\": 100076,\n            \"name\": \"\\u97e9\\u51ac\\u5b50\",\n            \"avatar\": \"http://wx.qlogo.cn/mmopen/wdTgCzZiaz4jKBQyiaz51icuwib8q53icnvd2zj3uUDm2q8QgdJDd7EAb1pP16V01tDLDwCHLMticwhK5s2JibTicv1twsHfbmUmvZnX/0\"\n        }, {\n            \"intro\": null,\n            \"id\": 100092,\n            \"name\": \"\\u97e9\\u4e4b\\u79cb\",\n            \"avatar\": \"/m/img/no_avatar.gif\"\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>用户昵称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "intro",
            "description": "<p>用户简介</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/search.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/tag/domains",
    "title": "领域列表",
    "name": "GetTags",
    "group": "Tag",
    "description": "<p>获取领域列表</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [{\n        \"id\": 2,\n        \"name\": \"\\u623f\\u5730\\u4ea7\"\n    }, {\n        \"id\": 3,\n        \"name\": \"\\u653f\\u5e9c\\u57fa\\u5efa\"\n    }, {\n        \"id\": 5,\n        \"name\": \"\\u4e92\\u8054\\u7f51\"\n    }, {\n        \"id\": 6,\n        \"name\": \"\\u80a1\\u7968\"\n    }, {\n        \"id\": 7,\n        \"name\": \"\\u503a\\u5238\"\n    }, {\n        \"id\": 8,\n        \"name\": \"\\u5546\\u54c1\"\n    }, {\n        \"id\": 9,\n        \"name\": \"\\u8d44\\u91d1\\u6c60\"\n    }, {\n        \"id\": 10,\n        \"name\": \"\\u65b0\\u4e09\\u677f\"\n    }, {\n        \"id\": 12,\n        \"name\": \"\\u4fdd\\u9669\"\n    }, {\n        \"id\": 13,\n        \"name\": \"\\u5b8f\\u89c2\\u7ecf\\u6d4e\"\n    }, {\n        \"id\": 14,\n        \"name\": \"\\u6d77\\u5916\\u5e02\\u573a\"\n    }, {\n        \"id\": 15,\n        \"name\": \"\\u80a1\\u6743\\u6295\\u8d44\"\n    }, {\n        \"id\": 16,\n        \"name\": \"\\u5916\\u6c47\"\n    }, {\n        \"id\": 17,\n        \"name\": \"\\u91cf\\u5316\\u6295\\u8d44\"\n    }, {\n        \"id\": 1,\n        \"name\": \"\\u5176\\u4ed6\\u5b9e\\u4e1a\"\n    }, {\n        \"id\": 18,\n        \"name\": \"\\u5176\\u4ed6\"\n    }],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/tag.py",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/api/user/3rdparty/signup",
    "title": "第三方注册",
    "name": "3rdpartySignup",
    "group": "User",
    "description": "<p>第三方渠道注册</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"wx\"",
              "\"wb\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>第三方类型(wx:微信, wb:微博)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>第三方的code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "nick",
            "description": "<p>昵称</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"Nick is already used\",\n    \"ec\": 201002\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/company_types",
    "title": "机构类型列表",
    "name": "GetCompanyTypes",
    "group": "User",
    "description": "<p>获取机构类型列表</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [{\n        \"id\": 2,\n        \"name\": \"信托\"\n    }, {\n        \"id\": 3,\n        \"name\": \"银行\"\n    }, {\n        \"id\": 4,\n        \"name\": \"证券\"\n    }, {\n        \"id\": 5,\n        \"name\": \"基金\"\n    }, {\n        \"id\": 6,\n        \"name\": \"保险\"\n    }, {\n        \"id\": 7,\n        \"name\": \"第三方理财\"\n    }, {\n        \"id\": 8,\n        \"name\": \"基金子公司\"\n    }, {\n        \"id\": 9,\n        \"name\": \"投资公司\"\n    }, {\n        \"id\": 10,\n        \"name\": \"专业投资机构\"\n    }, {\n        \"id\": 1,\n        \"name\": \"其他\"\n    }],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/login",
    "title": "获取用户登录及认证状态",
    "name": "GetLoginStatus",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"login\": true,\n        \"certified\": true\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/files",
    "title": "用户文件列表",
    "name": "GetMyFiles",
    "group": "User",
    "description": "<p>获取我的文件列表</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"Success\",\n    \"data\": [{\n        \"created_time\": \"2016-02-26T09:55:18\",\n        \"size\": 71684,\n        \"id\": 100091,\n        \"name\": \"测试数据文件.html\"\n    }],\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/answers",
    "title": "某个用户的回答列表",
    "name": "GetUserAnswers",
    "group": "User",
    "description": "<p>获取某用户的回答列表</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>用户昵称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "is_me",
            "description": "<p>是否是本人</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object[]</p> ",
            "optional": false,
            "field": "items",
            "description": "<p>回答列表</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.id",
            "description": "<p>ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.recommend_num",
            "description": "<p>赞同数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.not_recommend_num",
            "description": "<p>反对数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.title",
            "description": "<p>问题标题</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.view_num",
            "description": "<p>查阅数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.file_num",
            "description": "<p>附件数量</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.answers_count",
            "description": "<p>暂时不知道</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "items.answer",
            "description": "<p>回答</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.answer.id",
            "description": "<p>ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.answer.content",
            "description": "<p>内容</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.answer.agree_num",
            "description": "<p>赞同数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.answer.created_time",
            "description": "<p>回答时间</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "items.answer.user",
            "description": "<p>回答者信息</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "items.answer.user.id",
            "description": "<p>ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.answer.user.name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.answer.user.avatar",
            "description": "<p>头像</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "items.answer.user.intro",
            "description": "<p>简介</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"data\": {\n        \"has_next\": false,\n        \"username\": \"\\u5927\\u897f\\u74dc\",\n        \"is_me\": true,\n        \"items\": [{\n            \"recommend_num\": 0,\n            \"title\": \"\\u8fd1\\u671f\\u7ed9\\u5927\\u5bb6\\u6574\\u7406\\u4e862015\\u8fdd\\u7ea6\\u7684\\u4fe1\\u6258\\u8d44\\u7ba1\\u9879\\u76ee\\uff0c\\u4f9b\\u5927\\u5bb6\\u53c2\\u8003\\uff01\",\n            \"not_recommend_num\": 0,\n            \"view_num\": 28,\n            \"answer\": {\n                \"content\": \"\\u540c\\u610f\",\n                \"created_time\": \"2016-02-26T00:52:47\",\n                \"agree_num\": 1,\n                \"id\": 100126,\n                \"user\": {\n                    \"intro\": \"\\u54c8\\u54c8\\u54c8\",\n                    \"id\": 100094,\n                    \"name\": \"\\u5927\\u897f\\u74dc\",\n                    \"avatar\": \"/file/100089\"\n                }\n            },\n            \"file_num\": 1,\n            \"answers_count\": 0,\n            \"id\": 100004\n        }],\n        \"has_prev\": false,\n        \"page\": 1\n    },\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/overview",
    "title": "用户简要信息",
    "name": "GetUserOverview",
    "group": "User",
    "description": "<p>获取用户个人简要信息</p> ",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "certified",
            "description": "<p>是否认证</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "follow_num",
            "description": "<p>关注人数(待开发)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "follower_num",
            "description": "<p>被关注人数(待开发)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "coin_num",
            "description": "<p>金币数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>昵称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "question_num",
            "description": "<p>提问数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "answer_num",
            "description": "<p>回答数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "agree_num",
            "description": "<p>赞同数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "topic_num",
            "description": "<p>发起的话题数</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "answer_topic_num",
            "description": "<p>参与的话题数</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 205001,\n    \"message\": \"Old password incorrect\",\n    \"data\": {\n        follow_num\": 0,\n        \"coin_num\": 200,\n        \"name\": \"大西瓜\",\n        \"follower_num\": 0,\n        \"question_num\": 0,\n        \"intro\": null,\n        \"avatar\": \"头像文件地址\",\n        \"answer_topic_num\": 0,\n        \"agree_num\": 0,\n        \"topic_num\": 0,\n        \"id\": 100094,\n        \"certified\": false,\n        \"answer_num\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/profile",
    "title": "用户详细信息",
    "name": "GetUserProfile",
    "group": "User",
    "description": "<p>获取用户个人详细信息</p> ",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>昵称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "has_pwd",
            "description": "<p>是否有密码</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "user_detail",
            "description": "<p>用户详情</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.province",
            "description": "<p>省</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.city",
            "description": "<p>市</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "user_detail.gender",
            "description": "<p>性别(0保密, 1男, 2女)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.real_name",
            "description": "<p>真实姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": false,
            "field": "user_detail.capital_amount",
            "description": "<p>服务资金规模(1:5000万以下,2:5000万-1亿,3:1亿-5亿，4:5亿-10亿，5:10亿以上)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "user_detail.work_type",
            "description": "<p>工作属性(0其他，1理财师，2投资顾问，3资产管理人)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "user_detail.company_type",
            "description": "<p>机构属性</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "user_detail.accept_invite",
            "description": "<p>是否愿意回答(0否1是)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "user_detail.work_year",
            "description": "<p>工作年限(0：其他，1：1-3年，2:3-5年，3:5-10年，4:10年以上)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "user_detail.customer_quantity",
            "description": "<p>客户数量(0：其他，1：20位以下，2:20-50位，3:50-100位，4:100位以上)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.company_name",
            "description": "<p>公司名称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "user_detail.interested_domains",
            "description": "<p>感兴趣领域</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>id</p> ",
            "optional": false,
            "field": "user_detail.interested_domains.id",
            "description": "<p>领域ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.interested_domains.name",
            "description": "<p>领域名称</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "user_detail.expert_domains",
            "description": "<p>擅长领域</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>id</p> ",
            "optional": false,
            "field": "user_detail.expert_domains.id",
            "description": "<p>领域ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "user_detail.expert_domains.name",
            "description": "<p>领域名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 205001,\n    \"message\": \"Old password incorrect\",\n    \"data\": {\n        \"name\": \"大西瓜\",\n        \"mobile\": \"150****5727\",\n        \"user_detail\": {\n            \"province\": \"浙江省\",\n            \"capital_amount\": 0,\n            \"interested_domains\": [{\n                \"id\": 2,\n                \"name\": \"房地产\"\n            }, {\n                \"id\": 5,\n                \"name\": \"互联网\"\n            }, {\n                \"id\": 7,\n                \"name\": \"债券\"\n            }],\n            \"work_type\": 0,\n            \"company_type\": 10,\n            \"accept_invite\": 1,\n            \"work_year\": 1,\n            \"customer_quantity\": 0,\n            \"city\": \"杭州市\",\n            \"gender\": 1,\n            \"real_name\": null,\n            \"expert_domains\": [{\n                \"id\": 5,\n                \"name\": \"互联网\"\n            }],\n            \"company_name\": null\n        },\n        \"intro\": null,\n        \"avatar\": \"/file/100078\",\n        \"email\": null,\n        \"has_pwd\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "登录",
    "name": "Login",
    "group": "User",
    "description": "<p>用户登录</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "login",
            "description": "<p>账号(手机号/邮箱)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"y\"",
              "\"n\""
            ],
            "optional": true,
            "field": "remember",
            "description": "<p>是否记住用户</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"login\": \"15067125727\",\n    \"password\": \"dsa98d09sa\",\n    \"remember\": \"n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 200001,\n    \"message\": \"Incorrect user or password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/user/logout",
    "title": "注销",
    "name": "Logout",
    "group": "User",
    "description": "<p>用户注销</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "token",
            "description": "<p>Token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"d80sa8dsa09da8sd9sa89\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/password",
    "title": "重置密码",
    "name": "Reset_Password",
    "group": "User",
    "description": "<p>用户重置密码</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "old",
            "description": "<p>旧密码,如果原来有旧密码就必须传，需要校验</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"old\": \"123456\",\n    \"password\": \"234567\",\n    \"mobile\": \"15067125727\",\n    \"code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 205001,\n    \"message\": \"Old password incorrect\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": [200002]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/resetpwd/validate",
    "title": "重置密码检查",
    "name": "Reset_Password_Validate",
    "group": "User",
    "description": "<p>用户重置密码检查合法性</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mobile\": \"15067125727\",\n    \"code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": [201003]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/send_sms",
    "title": "发送注册验证码",
    "name": "Send_sms",
    "group": "User",
    "description": "<p>发送注册验证码</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mobile\": \"15067125727\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signup",
    "title": "注册",
    "name": "Signup",
    "group": "User",
    "description": "<p>用户注册</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "invitation",
            "description": "<p>邀请码</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mobile\": \"15067125727\",\n    \"password\": \"dsa98d09sa\",\n    \"name\": \"王二\",\n    \"code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 201004,\n    \"message\": \"Invalid invitation code\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Success\",\n    \"ec\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/user/signup/validate",
    "title": "注册检查",
    "name": "Signup_Validate",
    "group": "User",
    "description": "<p>用户注册信息检查合法性</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "code",
            "description": "<p>验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "invitation",
            "description": "<p>邀请码</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mobile\": \"15067125727\",\n    \"name\": \"王二\",\n    \"code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": [201001]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/profile",
    "title": "更新用户详细信息",
    "name": "UpdateUserProfile",
    "group": "User",
    "description": "<p>更新用户个人详细信息</p> ",
    "permission": [
      {
        "name": "已登录"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"大西瓜\",\n    \"mobile\": \"150****5727\",\n    \"user_detail\": {\n        \"province\": \"浙江省\",\n        \"capital_amount\": 0,\n        \"interested_domains\": [{\n            \"id\": 2,\n            \"name\": \"房地产\"\n        }, {\n            \"id\": 5,\n            \"name\": \"互联网\"\n        }, {\n            \"id\": 7,\n            \"name\": \"债券\"\n        }, {\n            \"id\": 10,\n            \"name\": \"新三板\"\n        }, {\n            \"id\": 13,\n            \"name\": \"宏观经济\"\n        }],\n        \"work_type\": 0,\n        \"company_type\": 10,\n        \"accept_invite\": true,\n        \"work_year\": 1,\n        \"customer_quantity\": 0,\n        \"city\": \"杭州市\",\n        \"gender\": 1,\n        \"real_name\": null,\n        \"expert_domains\": [{\n            \"id\": 5,\n            \"name\": \"互联网\"\n        }],\n        \"company_name\": null\n    },\n    \"intro\": \"哈哈哈\",\n    \"avatar\": \"/file/100089\",\n    \"email\": null,\n    \"has_pwd\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "e:/project/maice/optimus/optimus/frontend/user.py",
    "groupTitle": "User"
  }
] });