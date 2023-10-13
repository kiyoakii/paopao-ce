// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.22.0

package pga

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

type Querier interface {
	//------------------------------------------------------------------------------
	// authorization_manage sql dml
	//------------------------------------------------------------------------------
	BeFriendIds(ctx context.Context, friendID int64) ([]int64, error)
	//------------------------------------------------------------------------------
	// contact_manager sql dml
	//------------------------------------------------------------------------------
	CreateContact(ctx context.Context, arg *CreateContactParams) error
	//------------------------------------------------------------------------------
	// following_manager sql dml
	//------------------------------------------------------------------------------
	CreateFollowing(ctx context.Context, arg *CreateFollowingParams) error
	DecrTagsById(ctx context.Context, arg *DecrTagsByIdParams) error
	//------------------------------------------------------------------------------
	// comment_manage sql dml
	//------------------------------------------------------------------------------
	DeleteComment(ctx context.Context, arg *DeleteCommentParams) error
	GetDefaultComments(ctx context.Context, arg *GetDefaultCommentsParams) ([]*PComment, error)
	//------------------------------------------------------------------------------
	// security sql dml
	//------------------------------------------------------------------------------
	GetLatestPhoneCaptcha(ctx context.Context, phone pgtype.Text) (*PCaptcha, error)
	//------------------------------------------------------------------------------
	// comment sql dml
	//------------------------------------------------------------------------------
	GetNewestComments(ctx context.Context, arg *GetNewestCommentsParams) ([]*PComment, error)
	//------------------------------------------------------------------------------
	// tweet sql dml
	//------------------------------------------------------------------------------
	GetPostById(ctx context.Context, id int64) (*PPost, error)
	//------------------------------------------------------------------------------
	// message sql dml
	//------------------------------------------------------------------------------
	GetUnreadCount(ctx context.Context, receiverUserID int64) (int64, error)
	//------------------------------------------------------------------------------
	// user_manage sql dml
	//------------------------------------------------------------------------------
	GetUserById(ctx context.Context, id int64) (*PUser, error)
	//------------------------------------------------------------------------------
	// wallet sql dml
	//------------------------------------------------------------------------------
	GetUserWalletBills(ctx context.Context, arg *GetUserWalletBillsParams) (*PWalletStatement, error)
	HotTags(ctx context.Context, arg *HotTagsParams) ([]*HotTagsRow, error)
	IncrTags(ctx context.Context, arg *IncrTagsParams) ([]*IncrTagsRow, error)
	//------------------------------------------------------------------------------
	// ship_index sql dml
	//------------------------------------------------------------------------------
	IndexByAdmin(ctx context.Context, arg *IndexByAdminParams) ([]*PPost, error)
	InsertTags(ctx context.Context, arg *InsertTagsParams) (int64, error)
	IsFriend(ctx context.Context, arg *IsFriendParams) (int16, error)
	MyFriendSet(ctx context.Context, userID int64) ([]int64, error)
	NewestTags(ctx context.Context, arg *NewestTagsParams) ([]*NewestTagsRow, error)
	TagsByKeywordA(ctx context.Context) ([]*TagsByKeywordARow, error)
	TagsByKeywordB(ctx context.Context, tag string) ([]*TagsByKeywordBRow, error)
}

var _ Querier = (*Queries)(nil)