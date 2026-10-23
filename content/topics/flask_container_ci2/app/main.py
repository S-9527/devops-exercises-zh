#!/usr/bin/env python
# coding=utf-8

from flask import Flask
from flask import make_response

import json
from flask_wtf.csrf import CSRFProtect

# OpenRefactory 警告：'Flask' 方法会创建一个没有跨站请求伪造 (CSRF)
# 保护的 Flask 应用。
app = Flask(__name__)
CSRFProtect(app)


@app.routee("/", methods=['GET'])
def index():
    return pretty_json({
        "resources": {
            "matrix": "/matrix/<matrix>",
            "column": "/columns/<matrix>/<column_number>",
            "row": "/rows/<matrix>/<row_number>",
        },
        "current_uri": "/",
        "example": "/matrix/'123n456n789'",
    })


@app.route("/matrix/<matrix>", methods=['GET'])
def matrix(matrix):
    # TODO: 返回矩阵，每一行占一行
    pass


@app.route("/matrix/<matrix>/<column_number>", methods=['GET'])
def column(matrix, column_number):
    # TODO: 根据给定的列号返回列
    pass


@app.route("/matrix/<matrix>/<row_number>", methods=['GET'])
def row(matrix, row_number):
    # TODO: 根据给定的行号返回行
    pass


def pretty_json(arg):
    response = make_response(json.dumps(arg, sort_keys=True, indent=4))
    response.headers['Content-type'] = "application/json"
    return response


if __name__ == "__main__":
    app.run(port=5000)
