// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: following.sql

package pgc

import (
	"context"
)

const countFollowings = `-- name: CountFollowings :one
SELECT count(*) FROM p_following WHERE follow_id=$1 AND is_del=0
`

func (q *Queries) CountFollowings(ctx context.Context, followID int64) (int64, error) {
	row := q.db.QueryRow(ctx, countFollowings, followID)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const countFollows = `-- name: CountFollows :one
SELECT count(*) FROM p_following WHERE user_id=$1 AND is_del=0
`

func (q *Queries) CountFollows(ctx context.Context, userID int64) (int64, error) {
	row := q.db.QueryRow(ctx, countFollows, userID)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const createFollowing = `-- name: CreateFollowing :exec

INSERT INTO p_following (user_id, follow_id, created_on) 
VALUES ($1, $2, $3)
`

type CreateFollowingParams struct {
	UserID    int64
	FollowID  int64
	CreatedOn int64
}

// ------------------------------------------------------------------------------
// following_manager sql dml
// ------------------------------------------------------------------------------
func (q *Queries) CreateFollowing(ctx context.Context, arg *CreateFollowingParams) error {
	_, err := q.db.Exec(ctx, createFollowing, arg.UserID, arg.FollowID, arg.CreatedOn)
	return err
}

const deleteFollowing = `-- name: DeleteFollowing :exec
UPDATE p_following
SET is_del=1, deleted_on=$1
WHERE user_id=$2 AND follow_id=$3 AND is_del=0
`

type DeleteFollowingParams struct {
	DeletedOn int64
	UserID    int64
	FollowID  int64
}

func (q *Queries) DeleteFollowing(ctx context.Context, arg *DeleteFollowingParams) error {
	_, err := q.db.Exec(ctx, deleteFollowing, arg.DeletedOn, arg.UserID, arg.FollowID)
	return err
}

const existFollowing = `-- name: ExistFollowing :one
SELECT true FROM p_following WHERE user_id=$1 AND follow_id=$2 AND is_del=0
`

type ExistFollowingParams struct {
	UserID   int64
	FollowID int64
}

func (q *Queries) ExistFollowing(ctx context.Context, arg *ExistFollowingParams) (bool, error) {
	row := q.db.QueryRow(ctx, existFollowing, arg.UserID, arg.FollowID)
	var column_1 bool
	err := row.Scan(&column_1)
	return column_1, err
}

const listFollowings = `-- name: ListFollowings :many
SELECT u.id user_id,
    u.username username,
    u.nickname nickname,
    u.avatar avatar,
    u.created_on created_on
FROM p_following f JOIN p_user u ON f.user_id=u.id
WHERE f.follow_id=$1 AND f.is_del=0
ORDER BY u.nickname ASC
LIMIT $2 OFFSET $3
`

type ListFollowingsParams struct {
	FollowID int64
	Limit    int32
	Offset   int32
}

type ListFollowingsRow struct {
	UserID    int64
	Username  string
	Nickname  string
	Avatar    string
	CreatedOn int64
}

func (q *Queries) ListFollowings(ctx context.Context, arg *ListFollowingsParams) ([]*ListFollowingsRow, error) {
	rows, err := q.db.Query(ctx, listFollowings, arg.FollowID, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*ListFollowingsRow
	for rows.Next() {
		var i ListFollowingsRow
		if err := rows.Scan(
			&i.UserID,
			&i.Username,
			&i.Nickname,
			&i.Avatar,
			&i.CreatedOn,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listFollows = `-- name: ListFollows :many
SELECT u.id user_id,
    u.username username,
    u.nickname nickname,
    u.avatar avatar,
    u.created_on created_on
FROM p_following f JOIN p_user u ON f.follow_id=u.id
WHERE f.user_id=$1 AND f.is_del=0
ORDER BY u.nickname ASC
LIMIT $2 OFFSET $3
`

type ListFollowsParams struct {
	UserID int64
	Limit  int32
	Offset int32
}

type ListFollowsRow struct {
	UserID    int64
	Username  string
	Nickname  string
	Avatar    string
	CreatedOn int64
}

func (q *Queries) ListFollows(ctx context.Context, arg *ListFollowsParams) ([]*ListFollowsRow, error) {
	rows, err := q.db.Query(ctx, listFollows, arg.UserID, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*ListFollowsRow
	for rows.Next() {
		var i ListFollowsRow
		if err := rows.Scan(
			&i.UserID,
			&i.Username,
			&i.Nickname,
			&i.Avatar,
			&i.CreatedOn,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
