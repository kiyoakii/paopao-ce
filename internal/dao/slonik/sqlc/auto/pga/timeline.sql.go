// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: timeline.sql

package pga

import (
	"context"
)

const indexByAdmin = `-- name: IndexByAdmin :many

SELECT id, user_id, comment_count, collection_count, upvote_count, is_top, is_essence, is_lock, latest_replied_on, tags, attachment_price, ip, ip_loc, created_on, modified_on, deleted_on, is_del, visibility, share_count 
FROM p_post 
WHERE is_del=0 
ORDER BY is_top DESC, latest_replied_on DESC
LIMIT $1 OFFSET $2
`

type IndexByAdminParams struct {
	Limit  int32
	Offset int32
}

// ------------------------------------------------------------------------------
// ship_index sql dml
// ------------------------------------------------------------------------------
func (q *Queries) IndexByAdmin(ctx context.Context, arg *IndexByAdminParams) ([]*PPost, error) {
	rows, err := q.db.Query(ctx, indexByAdmin, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*PPost
	for rows.Next() {
		var i PPost
		if err := rows.Scan(
			&i.ID,
			&i.UserID,
			&i.CommentCount,
			&i.CollectionCount,
			&i.UpvoteCount,
			&i.IsTop,
			&i.IsEssence,
			&i.IsLock,
			&i.LatestRepliedOn,
			&i.Tags,
			&i.AttachmentPrice,
			&i.Ip,
			&i.IpLoc,
			&i.CreatedOn,
			&i.ModifiedOn,
			&i.DeletedOn,
			&i.IsDel,
			&i.Visibility,
			&i.ShareCount,
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
