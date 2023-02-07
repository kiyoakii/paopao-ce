// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0

package dbr

import ()

// 主题标签
type PTag struct {
	ID         int64
	UserID     int64
	Tag        string
	QuoteNum   int64
	CreatedOn  int64
	ModifiedOn int64
	DeletedOn  int64
	// 是否删除
	IsDel bool
}

// 用户
type PUser struct {
	ID       int64
	Nickname string
	Username string
	Phone    string
	// MD5密码
	Password string
	Salt     string
	// 状态, 1正常, 2停用
	Status int16
	Avatar string
	// 用户余额（分）
	Balance    int64
	IsAdmin    bool
	CreatedOn  int64
	ModifiedOn int64
	DeletedOn  int64
	IsDel      bool
}
