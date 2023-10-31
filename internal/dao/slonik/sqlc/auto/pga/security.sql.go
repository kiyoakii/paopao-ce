// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: security.sql

package pga

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const getLatestPhoneCaptcha = `-- name: GetLatestPhoneCaptcha :one

SELECT id, phone, captcha, use_times, expired_on, created_on, modified_on, deleted_on, is_del FROM p_captcha WHERE phone=$1 AND is_del=0
`

// ------------------------------------------------------------------------------
// security sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetLatestPhoneCaptcha(ctx context.Context, phone pgtype.Text) (*PCaptcha, error) {
	row := q.db.QueryRow(ctx, getLatestPhoneCaptcha, phone)
	var i PCaptcha
	err := row.Scan(
		&i.ID,
		&i.Phone,
		&i.Captcha,
		&i.UseTimes,
		&i.ExpiredOn,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}
