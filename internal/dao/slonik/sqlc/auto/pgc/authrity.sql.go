// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.21.0
// source: authrity.sql

package pgc

import (
	"context"
)

const beFriendIds = `-- name: BeFriendIds :many

SELECT user_id FROM p_contact WHERE friend_id=$1 AND status=2 AND is_del=0
`

// ------------------------------------------------------------------------------
// authorization_manage sql dml
// ------------------------------------------------------------------------------
func (q *Queries) BeFriendIds(ctx context.Context, friendID int64) ([]int64, error) {
	rows, err := q.db.Query(ctx, beFriendIds, friendID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []int64
	for rows.Next() {
		var user_id int64
		if err := rows.Scan(&user_id); err != nil {
			return nil, err
		}
		items = append(items, user_id)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const myFriendSet = `-- name: MyFriendSet :many
SELECT friend_id FROM p_contact WHERE user_id=$1 AND status=2 AND is_del=0
`

func (q *Queries) MyFriendSet(ctx context.Context, userID int64) ([]int64, error) {
	rows, err := q.db.Query(ctx, myFriendSet, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []int64
	for rows.Next() {
		var friend_id int64
		if err := rows.Scan(&friend_id); err != nil {
			return nil, err
		}
		items = append(items, friend_id)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
