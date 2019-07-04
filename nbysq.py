# @Time    : 2019/7/4 9:57
# @Author  : h.user
# @Email   : h.user@qq.com
# @File    : nbysq.py
# @Software: PyCharm

import requests
import re
import os

conn = requests.get(
    url="https://bbs.nubia.cn/",
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
)
content = conn.text

arg1 = re.search("var arg1='(.*?)';", content).group(1)
print("arg1:", arg1)

# _0x5e8b26 = re.search("var _0x5e8b26=_0x55f3('0x3', '\x6a\x53\x31\x59');String", )
# _0x5e8b26 = "3000176000856006061501533003690027800375" # 固定值，直接定义到js种
arg2 = os.popen("node nbysq.js %s" % arg1).readlines()[0].strip()

print("arg2:", arg2)

conn_test = requests.get(
    url="https://bbs.nubia.cn/",
    headers={
        "cookie": "acw_sc__v2=" + arg2 + ";",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
)

print(conn_test.text)
