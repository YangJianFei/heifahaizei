/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Thursday, June 30th 2022, 9:34:35 am
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

export const verifyUrl = (url: string): boolean => {
    return /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(url);
};

