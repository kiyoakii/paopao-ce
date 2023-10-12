// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.22.0
// source: user.sql

package pga

import (
	"context"
)

const getUserById = `-- name: GetUserById :one

SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE id=$1 AND is_del=0
`

// ------------------------------------------------------------------------------
// user_manage sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetUserById(ctx context.Context, id int64) (*PUser, error) {
	row := q.db.QueryRow(ctx, getUserById, id)
	var i PUser
	err := row.Scan(
		&i.ID,
		&i.Nickname,
		&i.Username,
		&i.Phone,
		&i.Password,
		&i.Salt,
		&i.Status,
		&i.Avatar,
		&i.Balance,
		&i.IsAdmin,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}
