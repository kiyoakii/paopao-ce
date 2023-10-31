// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: wallet.sql

package pgc

import (
	"context"
)

const addUserBalance = `-- name: AddUserBalance :one
UPDATE p_user 
SET balance=balance+$1, modified_on=$2 
WHERE id=$3 AND is_del=0
RETURNING balance
`

type AddUserBalanceParams struct {
	Balance    int64
	ModifiedOn int64
	ID         int64
}

func (q *Queries) AddUserBalance(ctx context.Context, arg *AddUserBalanceParams) (int64, error) {
	row := q.db.QueryRow(ctx, addUserBalance, arg.Balance, arg.ModifiedOn, arg.ID)
	var balance int64
	err := row.Scan(&balance)
	return balance, err
}

const countUserWalletBill = `-- name: CountUserWalletBill :one
SELECT count(*) FROM p_wallet_statement WHERE user_id=$1 AND is_del=0
`

func (q *Queries) CountUserWalletBill(ctx context.Context, userID int64) (int64, error) {
	row := q.db.QueryRow(ctx, countUserWalletBill, userID)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const createPostAttachmentBill = `-- name: CreatePostAttachmentBill :one
INSERT INTO p_post_attachment_bill (post_id, user_id, paid_amount, created_on)
VALUES ($1, $2, $3, $4)
RETURNING id
`

type CreatePostAttachmentBillParams struct {
	PostID     int64
	UserID     int64
	PaidAmount int64
	CreatedOn  int64
}

func (q *Queries) CreatePostAttachmentBill(ctx context.Context, arg *CreatePostAttachmentBillParams) (int64, error) {
	row := q.db.QueryRow(ctx, createPostAttachmentBill,
		arg.PostID,
		arg.UserID,
		arg.PaidAmount,
		arg.CreatedOn,
	)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const createPostBill = `-- name: CreatePostBill :one
INSERT INTO p_wallet_statement (post_id, user_id, change_amount, balance_snapshot, reason, created_on) 
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id
`

type CreatePostBillParams struct {
	PostID          int64
	UserID          int64
	ChangeAmount    int64
	BalanceSnapshot int64
	Reason          string
	CreatedOn       int64
}

func (q *Queries) CreatePostBill(ctx context.Context, arg *CreatePostBillParams) (int64, error) {
	row := q.db.QueryRow(ctx, createPostBill,
		arg.PostID,
		arg.UserID,
		arg.ChangeAmount,
		arg.BalanceSnapshot,
		arg.Reason,
		arg.CreatedOn,
	)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const createRecharge = `-- name: CreateRecharge :one
INSERT INTO p_wallet_recharge (user_id, amount, created_on) 
VALUES ($1, $2, $3)
RETURNING id
`

type CreateRechargeParams struct {
	UserID    int64
	Amount    int64
	CreatedOn int64
}

func (q *Queries) CreateRecharge(ctx context.Context, arg *CreateRechargeParams) (int64, error) {
	row := q.db.QueryRow(ctx, createRecharge, arg.UserID, arg.Amount, arg.CreatedOn)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const createWalletStatement = `-- name: CreateWalletStatement :one
INSERT INTO p_wallet_statement (user_id, change_amount, balance_snapshot, reason, created_on)
VALUES ($1, $2, $3, $4, $5)
RETURNING id
`

type CreateWalletStatementParams struct {
	UserID          int64
	ChangeAmount    int64
	BalanceSnapshot int64
	Reason          string
	CreatedOn       int64
}

func (q *Queries) CreateWalletStatement(ctx context.Context, arg *CreateWalletStatementParams) (int64, error) {
	row := q.db.QueryRow(ctx, createWalletStatement,
		arg.UserID,
		arg.ChangeAmount,
		arg.BalanceSnapshot,
		arg.Reason,
		arg.CreatedOn,
	)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const getRechargeById = `-- name: GetRechargeById :one
SELECT id, user_id, amount, trade_no, trade_status, created_on, modified_on, deleted_on, is_del FROM p_wallet_recharge WHERE id=$1 AND is_del=0
`

func (q *Queries) GetRechargeById(ctx context.Context, id int64) (*PWalletRecharge, error) {
	row := q.db.QueryRow(ctx, getRechargeById, id)
	var i PWalletRecharge
	err := row.Scan(
		&i.ID,
		&i.UserID,
		&i.Amount,
		&i.TradeNo,
		&i.TradeStatus,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}

const getUserBalance = `-- name: GetUserBalance :one
SELECT balance FROM p_user WHERE id=$1 AND is_del=0
`

func (q *Queries) GetUserBalance(ctx context.Context, id int64) (int64, error) {
	row := q.db.QueryRow(ctx, getUserBalance, id)
	var balance int64
	err := row.Scan(&balance)
	return balance, err
}

const getUserWalletBills = `-- name: GetUserWalletBills :many

SELECT id, user_id, change_amount, balance_snapshot, reason, post_id, created_on, modified_on, deleted_on, is_del 
FROM p_wallet_statement 
WHERE user_id=$1 AND is_del=0 
ORDER BY id DESC 
LIMIT $2 OFFSET $3
`

type GetUserWalletBillsParams struct {
	UserID int64
	Limit  int32
	Offset int32
}

// ------------------------------------------------------------------------------
// wallet sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetUserWalletBills(ctx context.Context, arg *GetUserWalletBillsParams) ([]*PWalletStatement, error) {
	rows, err := q.db.Query(ctx, getUserWalletBills, arg.UserID, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*PWalletStatement
	for rows.Next() {
		var i PWalletStatement
		if err := rows.Scan(
			&i.ID,
			&i.UserID,
			&i.ChangeAmount,
			&i.BalanceSnapshot,
			&i.Reason,
			&i.PostID,
			&i.CreatedOn,
			&i.ModifiedOn,
			&i.DeletedOn,
			&i.IsDel,
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

const markSuccessRecharge = `-- name: MarkSuccessRecharge :exec
UPDATE p_wallet_recharge 
SET trade_no=$1, trade_status='TRADE_SUCCESS', modified_on=$2
WHERE id=$3 AND is_del=0
`

type MarkSuccessRechargeParams struct {
	TradeNo    string
	ModifiedOn int64
	ID         int64
}

func (q *Queries) MarkSuccessRecharge(ctx context.Context, arg *MarkSuccessRechargeParams) error {
	_, err := q.db.Exec(ctx, markSuccessRecharge, arg.TradeNo, arg.ModifiedOn, arg.ID)
	return err
}

const minusUserBalance = `-- name: MinusUserBalance :one
UPDATE p_user 
SET balance=balance-$1, modified_on=$2 
WHERE id=$3 AND is_del=0
RETURNING balance
`

type MinusUserBalanceParams struct {
	Balance    int64
	ModifiedOn int64
	ID         int64
}

func (q *Queries) MinusUserBalance(ctx context.Context, arg *MinusUserBalanceParams) (int64, error) {
	row := q.db.QueryRow(ctx, minusUserBalance, arg.Balance, arg.ModifiedOn, arg.ID)
	var balance int64
	err := row.Scan(&balance)
	return balance, err
}
