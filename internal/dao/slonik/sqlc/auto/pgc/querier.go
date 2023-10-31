// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0

package pgc

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

type Querier interface {
	AddAttachment(ctx context.Context, arg *AddAttachmentParams) (int64, error)
	AddCommentMetric(ctx context.Context, arg *AddCommentMetricParams) (int64, error)
	AddFriendMsgsUpdate(ctx context.Context, arg *AddFriendMsgsUpdateParams) error
	//------------------------------------------------------------------------------
	// tweet_manage sql dml
	//------------------------------------------------------------------------------
	AddPost(ctx context.Context, arg *AddPostParams) error
	AddPostCollection(ctx context.Context, arg *AddPostCollectionParams) (int64, error)
	AddPostContent(ctx context.Context, arg *AddPostContentParams) (int64, error)
	AddPostStar(ctx context.Context, arg *AddPostStarParams) (int64, error)
	AddTweetMetric(ctx context.Context, arg *AddTweetMetricParams) (int64, error)
	AddUserBalance(ctx context.Context, arg *AddUserBalanceParams) (int64, error)
	AddUserMetric(ctx context.Context, arg *AddUserMetricParams) (int64, error)
	//------------------------------------------------------------------------------
	// authorization_manage sql dml
	//------------------------------------------------------------------------------
	BeFriendIds(ctx context.Context, friendID int64) ([]int64, error)
	CommentIdsByPostId(ctx context.Context, postID int64) ([]int64, error)
	CommentMediaFromCommentIds(ctx context.Context, ids []int64) ([]string, error)
	CommentMotivationFactor(ctx context.Context, commentID int64) (int32, error)
	CountAllMessages(ctx context.Context, arg *CountAllMessagesParams) (int64, error)
	CountAnyPost(ctx context.Context, visibility int16) (int64, error)
	CountFollowingTweets(ctx context.Context, userID int64) (int64, error)
	CountFollowingTweetsFollow(ctx context.Context, arg *CountFollowingTweetsFollowParams) (int64, error)
	CountFollowingTweetsFriendFollow(ctx context.Context, arg *CountFollowingTweetsFriendFollowParams) (int64, error)
	CountFollowings(ctx context.Context, followID int64) (int64, error)
	CountFollows(ctx context.Context, userID int64) (int64, error)
	CountFriendsById(ctx context.Context, userID int64) (int64, error)
	CountIndexHotsTweets(ctx context.Context) (int64, error)
	CountIndexNewestTweets(ctx context.Context) (int64, error)
	CountIndexTrends(ctx context.Context, userID int64) (int64, error)
	CountListFollowingTweetsFriend(ctx context.Context, arg *CountListFollowingTweetsFriendParams) (int64, error)
	CountRequestingMessages(ctx context.Context, receiverUserID int64) (int64, error)
	CountSyncSearchTweets(ctx context.Context) (int64, error)
	CountSystemMessages(ctx context.Context, receiverUserID int64) (int64, error)
	CountUnreadMessages(ctx context.Context, receiverUserID int64) (int64, error)
	CountUserCommentTweetsByFriend(ctx context.Context, commentUserID int64) (int64, error)
	CountUserCommentTweetsByGuest(ctx context.Context, commentUserID int64) (int64, error)
	CountUserCommentTweetsBySelf(ctx context.Context, commentUserID int64) (int64, error)
	CountUserMediaTweetsByFriend(ctx context.Context, userID int64) (int64, error)
	CountUserMediaTweetsByGuest(ctx context.Context, userID int64) (int64, error)
	CountUserMediaTweetsBySelf(ctx context.Context, userID int64) (int64, error)
	CountUserPostStars(ctx context.Context, arg *CountUserPostStarsParams) (int64, error)
	CountUserPosts(ctx context.Context, arg *CountUserPostsParams) (int64, error)
	CountUserStarTweetsByAdmin(ctx context.Context, userID int64) (int64, error)
	CountUserStarTweetsByFriend(ctx context.Context, userID int64) (int64, error)
	CountUserStarTweetsByGuest(ctx context.Context, userID int64) (int64, error)
	CountUserStarTweetsBySelf(ctx context.Context, arg *CountUserStarTweetsBySelfParams) (int64, error)
	CountUserTweets(ctx context.Context, arg *CountUserTweetsParams) (int64, error)
	CountUserWalletBill(ctx context.Context, userID int64) (int64, error)
	CountWhisperMessages(ctx context.Context, arg *CountWhisperMessagesParams) (int64, error)
	CreateComment(ctx context.Context, arg *CreateCommentParams) (int64, error)
	CreateCommentContent(ctx context.Context, arg *CreateCommentContentParams) (int64, error)
	CreateCommentReply(ctx context.Context, arg *CreateCommentReplyParams) (int64, error)
	//------------------------------------------------------------------------------
	// contact_manager sql dml
	//------------------------------------------------------------------------------
	CreateContact(ctx context.Context, arg *CreateContactParams) error
	//------------------------------------------------------------------------------
	// following_manager sql dml
	//------------------------------------------------------------------------------
	CreateFollowing(ctx context.Context, arg *CreateFollowingParams) error
	CreateMessage(ctx context.Context, arg *CreateMessageParams) (int64, error)
	CreatePhoneCaptcha(ctx context.Context, arg *CreatePhoneCaptchaParams) (int64, error)
	CreatePostAttachmentBill(ctx context.Context, arg *CreatePostAttachmentBillParams) (int64, error)
	CreatePostBill(ctx context.Context, arg *CreatePostBillParams) (int64, error)
	CreateRecharge(ctx context.Context, arg *CreateRechargeParams) (int64, error)
	CreateThumbsUpDownComment(ctx context.Context, arg *CreateThumbsUpDownCommentParams) (int64, error)
	CreateUser(ctx context.Context, arg *CreateUserParams) (int64, error)
	CreateWalletStatement(ctx context.Context, arg *CreateWalletStatementParams) (int64, error)
	DecrCommentReplyCount(ctx context.Context, arg *DecrCommentReplyCountParams) error
	DecrTagsById(ctx context.Context, arg *DecrTagsByIdParams) error
	//------------------------------------------------------------------------------
	// comment_manage sql dml
	//------------------------------------------------------------------------------
	DeleteComment(ctx context.Context, arg *DeleteCommentParams) error
	DeleteCommentByPostId(ctx context.Context, arg *DeleteCommentByPostIdParams) error
	DeleteCommentContentByCommentIds(ctx context.Context, arg *DeleteCommentContentByCommentIdsParams) error
	DeleteCommentMetric(ctx context.Context, arg *DeleteCommentMetricParams) error
	DeleteCommentReply(ctx context.Context, arg *DeleteCommentReplyParams) error
	DeleteCommentThumbs(ctx context.Context, arg *DeleteCommentThumbsParams) error
	DeleteFollowing(ctx context.Context, arg *DeleteFollowingParams) error
	DeleteFriend(ctx context.Context, arg *DeleteFriendParams) error
	DeleteFriendByIds(ctx context.Context, arg *DeleteFriendByIdsParams) error
	DeletePostById(ctx context.Context, arg *DeletePostByIdParams) error
	DeletePostCollecton(ctx context.Context, arg *DeletePostCollectonParams) error
	DeletePostStar(ctx context.Context, arg *DeletePostStarParams) error
	DeleteReplyByCommentIds(ctx context.Context, arg *DeleteReplyByCommentIdsParams) error
	DeleteReplyThumbs(ctx context.Context, arg *DeleteReplyThumbsParams) error
	DeleteTweetMetric(ctx context.Context, arg *DeleteTweetMetricParams) error
	DeleteUserMetric(ctx context.Context, arg *DeleteUserMetricParams) error
	ExistFollowing(ctx context.Context, arg *ExistFollowingParams) (bool, error)
	FreshContactStatus(ctx context.Context, arg *FreshContactStatusParams) error
	GetAllMessages(ctx context.Context, arg *GetAllMessagesParams) ([]*PMessage, error)
	GetAnyPosts(ctx context.Context, arg *GetAnyPostsParams) ([]*PPost, error)
	GetAnyusers(ctx context.Context) ([]*PUser, error)
	GetBeFollowIds(ctx context.Context, userID int64) ([]int64, error)
	GetBeFriendIds(ctx context.Context, friendID int64) ([]int64, error)
	GetCommentById(ctx context.Context, id int64) (*PComment, error)
	GetCommentContentsByIds(ctx context.Context, ids []int64) ([]*PCommentContent, error)
	GetCommentCount(ctx context.Context, postID int64) (int64, error)
	GetCommentRepliesByIds(ctx context.Context, ids []int64) ([]*PCommentReply, error)
	GetCommentReplyById(ctx context.Context, id int64) (*PCommentReply, error)
	GetCommentReplyThumb(ctx context.Context, arg *GetCommentReplyThumbParams) (*PTweetCommentThumb, error)
	GetCommentThumbs(ctx context.Context, arg *GetCommentThumbsParams) ([]*GetCommentThumbsRow, error)
	GetContact(ctx context.Context, arg *GetContactParams) (*GetContactRow, error)
	GetContacts(ctx context.Context, arg *GetContactsParams) ([]*GetContactsRow, error)
	GetDefaultComments(ctx context.Context, arg *GetDefaultCommentsParams) ([]*PComment, error)
	GetHotsComments(ctx context.Context, arg *GetHotsCommentsParams) ([]*PComment, error)
	//------------------------------------------------------------------------------
	// trends_manager sql dml
	//------------------------------------------------------------------------------
	GetIndexTrends(ctx context.Context, arg *GetIndexTrendsParams) ([]*GetIndexTrendsRow, error)
	//------------------------------------------------------------------------------
	// security sql dml
	//------------------------------------------------------------------------------
	GetLatestPhoneCaptcha(ctx context.Context, phone pgtype.Text) (*PCaptcha, error)
	GetMessageById(ctx context.Context, id int64) (*PMessage, error)
	//------------------------------------------------------------------------------
	// comment sql dml
	//------------------------------------------------------------------------------
	GetNewestComments(ctx context.Context, arg *GetNewestCommentsParams) ([]*PComment, error)
	GetPostAttachementBill(ctx context.Context, arg *GetPostAttachementBillParams) (*PPostAttachmentBill, error)
	//------------------------------------------------------------------------------
	// tweet sql dml
	//------------------------------------------------------------------------------
	GetPostById(ctx context.Context, id int64) (*PPost, error)
	//------------------------------------------------------------------------------
	// tweet_help sql dml
	//------------------------------------------------------------------------------
	GetPostConetentByIds(ctx context.Context, ids []int64) ([]*GetPostConetentByIdsRow, error)
	GetPostContentById(ctx context.Context, id int64) (*PPostContent, error)
	GetPostContentsByIds(ctx context.Context, ids []int64) ([]*PPostContent, error)
	GetRechargeById(ctx context.Context, id int64) (*PWalletRecharge, error)
	//------------------------------------------------------------------------------
	// user_manage sql dml
	//------------------------------------------------------------------------------
	GetRegisterUserCount(ctx context.Context) (int64, error)
	GetRequestingMessages(ctx context.Context, arg *GetRequestingMessagesParams) ([]*PMessage, error)
	GetSystemMessages(ctx context.Context, arg *GetSystemMessagesParams) ([]*PMessage, error)
	GetTweetCommentThumb(ctx context.Context, arg *GetTweetCommentThumbParams) (*PTweetCommentThumb, error)
	//------------------------------------------------------------------------------
	// message sql dml
	//------------------------------------------------------------------------------
	GetUnreadCount(ctx context.Context, receiverUserID int64) (int64, error)
	GetUnreadMessages(ctx context.Context, arg *GetUnreadMessagesParams) ([]*PMessage, error)
	GetUserBalance(ctx context.Context, id int64) (int64, error)
	GetUserById(ctx context.Context, id int64) (*PUser, error)
	GetUserByPhone(ctx context.Context, phone string) (*PUser, error)
	GetUserByUsername(ctx context.Context, username string) (*PUser, error)
	GetUserFriend(ctx context.Context, arg *GetUserFriendParams) (*GetUserFriendRow, error)
	GetUserPostCollection(ctx context.Context, arg *GetUserPostCollectionParams) (*GetUserPostCollectionRow, error)
	GetUserPostCollections(ctx context.Context, arg *GetUserPostCollectionsParams) ([]*GetUserPostCollectionsRow, error)
	GetUserPostStar(ctx context.Context, arg *GetUserPostStarParams) (*GetUserPostStarRow, error)
	GetUserPostStars(ctx context.Context, arg *GetUserPostStarsParams) ([]*GetUserPostStarsRow, error)
	GetUserPosts(ctx context.Context, arg *GetUserPostsParams) ([]*PPost, error)
	GetUserTweetsCount(ctx context.Context, userID int64) (int32, error)
	//------------------------------------------------------------------------------
	// wallet sql dml
	//------------------------------------------------------------------------------
	GetUserWalletBills(ctx context.Context, arg *GetUserWalletBillsParams) ([]*PWalletStatement, error)
	GetUsersByIds(ctx context.Context, ids []int64) ([]*PUser, error)
	GetUsersByKeyword(ctx context.Context, username string) ([]*PUser, error)
	GetWhisperMessages(ctx context.Context, arg *GetWhisperMessagesParams) ([]*PMessage, error)
	HighlightComment(ctx context.Context, arg *HighlightCommentParams) (int16, error)
	HighlightPost(ctx context.Context, id int64) (int16, error)
	HotTags(ctx context.Context, arg *HotTagsParams) ([]*HotTagsRow, error)
	IncrCommentReplyCount(ctx context.Context, arg *IncrCommentReplyCountParams) error
	IncrTags(ctx context.Context, arg *IncrTagsParams) ([]*IncrTagsRow, error)
	//------------------------------------------------------------------------------
	// ship_index sql dml
	//------------------------------------------------------------------------------
	IndexByAdmin(ctx context.Context, arg *IndexByAdminParams) ([]*PPost, error)
	InsertTags(ctx context.Context, arg *InsertTagsParams) (int64, error)
	IsFriend(ctx context.Context, arg *IsFriendParams) (bool, error)
	ListFollowingTweets(ctx context.Context, arg *ListFollowingTweetsParams) ([]*PPost, error)
	ListFollowingTweetsFollow(ctx context.Context, arg *ListFollowingTweetsFollowParams) ([]*PPost, error)
	ListFollowingTweetsFriend(ctx context.Context, arg *ListFollowingTweetsFriendParams) ([]*PPost, error)
	ListFollowingTweetsFriendFollow(ctx context.Context, arg *ListFollowingTweetsFriendFollowParams) ([]*PPost, error)
	ListFollowings(ctx context.Context, arg *ListFollowingsParams) ([]*ListFollowingsRow, error)
	ListFollows(ctx context.Context, arg *ListFollowsParams) ([]*ListFollowsRow, error)
	ListFriend(ctx context.Context, arg *ListFriendParams) ([]*ListFriendRow, error)
	ListIndexHotsTweets(ctx context.Context, arg *ListIndexHotsTweetsParams) ([]*PPost, error)
	ListIndexNewestTweets(ctx context.Context, arg *ListIndexNewestTweetsParams) ([]*PPost, error)
	ListSyncSearchTweets(ctx context.Context, arg *ListSyncSearchTweetsParams) ([]*PPost, error)
	ListUserTweets(ctx context.Context, arg *ListUserTweetsParams) ([]*PPost, error)
	LockPost(ctx context.Context, arg *LockPostParams) (int16, error)
	MarkSuccessRecharge(ctx context.Context, arg *MarkSuccessRechargeParams) error
	MediaContentByPostId(ctx context.Context, postID int64) ([]string, error)
	MinusUserBalance(ctx context.Context, arg *MinusUserBalanceParams) (int64, error)
	MyFollowIds(ctx context.Context, userID int64) ([]int64, error)
	//------------------------------------------------------------------------------
	// user_relation sql dml
	//------------------------------------------------------------------------------
	MyFriendIds(ctx context.Context, userID int64) ([]int64, error)
	MyFriendSet(ctx context.Context, userID int64) ([]int64, error)
	NewestTags(ctx context.Context, arg *NewestTagsParams) ([]*NewestTagsRow, error)
	PostHighlightStatus(ctx context.Context, id int64) (*PostHighlightStatusRow, error)
	ReadAllMessage(ctx context.Context, arg *ReadAllMessageParams) error
	ReadMessage(ctx context.Context, arg *ReadMessageParams) error
	RejectFriendMsgsUpdate(ctx context.Context, arg *RejectFriendMsgsUpdateParams) error
	StickPost(ctx context.Context, arg *StickPostParams) (int16, error)
	TagsByKeywordA(ctx context.Context) ([]*TagsByKeywordARow, error)
	TagsByKeywordB(ctx context.Context, tag string) ([]*TagsByKeywordBRow, error)
	TweetMotivationFactor(ctx context.Context, postID int64) (int32, error)
	//------------------------------------------------------------------------------
	// comment_metrics sql dml
	//------------------------------------------------------------------------------
	UpdateCommentMetric(ctx context.Context, arg *UpdateCommentMetricParams) error
	UpdateCommentThumbsCount(ctx context.Context, arg *UpdateCommentThumbsCountParams) error
	UpdatePost(ctx context.Context, arg *UpdatePostParams) error
	UpdateReplyThumbsCount(ctx context.Context, arg *UpdateReplyThumbsCountParams) error
	UpdateThumbsUpDownComment(ctx context.Context, arg *UpdateThumbsUpDownCommentParams) error
	//------------------------------------------------------------------------------
	// tweet_metrics sql dml
	//------------------------------------------------------------------------------
	UpdateTweetMetric(ctx context.Context, arg *UpdateTweetMetricParams) error
	UpdateUser(ctx context.Context, arg *UpdateUserParams) error
	//------------------------------------------------------------------------------
	// user_metrics sql dml
	//------------------------------------------------------------------------------
	UpdateUserMetric(ctx context.Context, arg *UpdateUserMetricParams) error
	UpsertCommentMetric(ctx context.Context, arg *UpsertCommentMetricParams) error
	UpsertContact(ctx context.Context, arg *UpsertContactParams) (*UpsertContactRow, error)
	UpsertTweetMetric(ctx context.Context, arg *UpsertTweetMetricParams) error
	UsePhoneCaptcha(ctx context.Context, arg *UsePhoneCaptchaParams) error
	UserCommentTweetsByFriend(ctx context.Context, arg *UserCommentTweetsByFriendParams) ([]*UserCommentTweetsByFriendRow, error)
	UserCommentTweetsByGuest(ctx context.Context, arg *UserCommentTweetsByGuestParams) ([]*UserCommentTweetsByGuestRow, error)
	UserCommentTweetsBySelf(ctx context.Context, arg *UserCommentTweetsBySelfParams) ([]*UserCommentTweetsBySelfRow, error)
	UserMediaTweetsByFriend(ctx context.Context, arg *UserMediaTweetsByFriendParams) ([]*UserMediaTweetsByFriendRow, error)
	UserMediaTweetsByGuest(ctx context.Context, arg *UserMediaTweetsByGuestParams) ([]*UserMediaTweetsByGuestRow, error)
	UserMediaTweetsBySelf(ctx context.Context, arg *UserMediaTweetsBySelfParams) ([]*UserMediaTweetsBySelfRow, error)
	UserStarTweetsByAdmin(ctx context.Context, arg *UserStarTweetsByAdminParams) ([]*UserStarTweetsByAdminRow, error)
	UserStarTweetsByFriend(ctx context.Context, arg *UserStarTweetsByFriendParams) ([]*UserStarTweetsByFriendRow, error)
	UserStarTweetsByGuest(ctx context.Context, arg *UserStarTweetsByGuestParams) ([]*UserStarTweetsByGuestRow, error)
	UserStarTweetsBySelf(ctx context.Context, arg *UserStarTweetsBySelfParams) ([]*UserStarTweetsBySelfRow, error)
	VisiblePost(ctx context.Context, arg *VisiblePostParams) (int16, error)
}

var _ Querier = (*Queries)(nil)
