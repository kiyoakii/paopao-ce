// Code generated by Yesql. DO NOT EDIT.
// versions:
// - Yesql v1.1.6

package cc

import (
	"context"

	"github.com/alimy/yesql"
	"github.com/jmoiron/sqlx"
)

const (
	_UserInfo_AuthorizationManage = `SELECT * FROM @user WHERE username=?`
	_UserInfo_CommentManage       = `SELECT * FROM @user WHERE username=?`
	_UserInfo_Comment             = `SELECT * FROM @user WHERE username=?`
	_UserInfo_ContactManager      = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FollowIndexA        = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FollowIndex         = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FriendIndexA        = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FriendIndex         = `SELECT * FROM @user WHERE username=?`
	_UserInfo_LightIndexA         = `SELECT * FROM @user WHERE username=?`
	_UserInfo_LightIndex          = `SELECT * FROM @user WHERE username=?`
	_UserInfo_Message             = `SELECT * FROM @user WHERE username=?`
	_UserInfo_Security            = `SELECT * FROM @user WHERE username=?`
	_UserInfo_SimpleIndexA        = `SELECT * FROM @user WHERE username=?`
	_UserInfo_SimpleIndex         = `SELECT * FROM @user WHERE username=?`
	_DecrTagsById_TopicA          = `UPDATE @tag SET quote_num=quote_num-1, modified_on=? WHERE id IN (?)`
	_HotTags_TopicA               = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.quote_num DESC LIMIT ? OFFSET ?`
	_IncrTagsById_TopicA          = `UPDATE @tag SET quote_num=quote_num+1, is_del=0, modified_on=? WHERE id IN (?)`
	_InsertTag_TopicA             = `INSERT INTO @tag (user_id, tag, created_on, modified_on, quote_num) VALUES (?, ?, ?, ?, 1)`
	_NewestTags_TopicA            = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.id DESC LIMIT ? OFFSET ?`
	_TagsByIdA_TopicA             = `SELECT id FROM @tag WHERE id IN (?) AND is_del = 0 AND quote_num > 0`
	_TagsByIdB_TopicA             = `SELECT id, user_id, tag, quote_num FROM @tag WHERE id IN (?)`
	_TagsByKeywordA_TopicA        = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 ORDER BY quote_num DESC LIMIT 6`
	_TagsByKeywordB_TopicA        = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 AND tag LIKE ? ORDER BY quote_num DESC LIMIT 6`
	_TagsForIncr_TopicA           = `SELECT id, user_id, tag, quote_num FROM @tag WHERE tag IN (?)`
	_UserInfo_TweetA              = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetHelpA          = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetHelp           = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetManageA        = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetManage         = `SELECT * FROM @user WHERE username=?`
	_UserInfo_Tweet               = `SELECT * FROM @user WHERE username=?`
	_UserInfo_UserManage          = `SELECT * FROM @user WHERE username=?`
	_UserInfo_Wallet              = `SELECT * FROM @user WHERE username=?`
)

type AuthorizationManage struct {
	yesql.Namespace `yesql:"authorization_manage"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type Comment struct {
	yesql.Namespace `yesql:"comment"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type CommentManage struct {
	yesql.Namespace `yesql:"comment_manage"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type ContactManager struct {
	yesql.Namespace `yesql:"contact_manager"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FollowIndex struct {
	yesql.Namespace `yesql:"follow_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FollowIndexA struct {
	yesql.Namespace `yesql:"follow_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FriendIndex struct {
	yesql.Namespace `yesql:"friend_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FriendIndexA struct {
	yesql.Namespace `yesql:"friend_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type LightIndex struct {
	yesql.Namespace `yesql:"light_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type LightIndexA struct {
	yesql.Namespace `yesql:"light_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type Message struct {
	yesql.Namespace `yesql:"message"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type Security struct {
	yesql.Namespace `yesql:"security"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type SimpleIndex struct {
	yesql.Namespace `yesql:"simple_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type SimpleIndexA struct {
	yesql.Namespace `yesql:"simple_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TopicA struct {
	yesql.Namespace `yesql:"topic_a"`
	DecrTagsById    string     `yesql:"decr_tags_by_id"`
	IncrTagsById    string     `yesql:"incr_tags_by_id"`
	TagsByIdA       string     `yesql:"tags_by_id_a"`
	TagsByIdB       string     `yesql:"tags_by_id_b"`
	TagsForIncr     string     `yesql:"tags_for_incr"`
	HotTags         *sqlx.Stmt `yesql:"hot_tags"`
	InsertTag       *sqlx.Stmt `yesql:"insert_tag"`
	NewestTags      *sqlx.Stmt `yesql:"newest_tags"`
	TagsByKeywordA  *sqlx.Stmt `yesql:"tags_by_keyword_a"`
	TagsByKeywordB  *sqlx.Stmt `yesql:"tags_by_keyword_b"`
}

type Tweet struct {
	yesql.Namespace `yesql:"tweet"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetA struct {
	yesql.Namespace `yesql:"tweet_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetHelp struct {
	yesql.Namespace `yesql:"tweet_help"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetHelpA struct {
	yesql.Namespace `yesql:"tweet_help_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetManage struct {
	yesql.Namespace `yesql:"tweet_manage"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetManageA struct {
	yesql.Namespace `yesql:"tweet_manage_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type UserManage struct {
	yesql.Namespace `yesql:"user_manage"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type Wallet struct {
	yesql.Namespace `yesql:"wallet"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

func BuildAuthorizationManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *AuthorizationManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &AuthorizationManage{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_AuthorizationManage))); err != nil {
		return
	}
	return
}

func BuildComment(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Comment, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Comment{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_Comment))); err != nil {
		return
	}
	return
}

func BuildCommentManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *CommentManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &CommentManage{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_CommentManage))); err != nil {
		return
	}
	return
}

func BuildContactManager(p yesql.PreparexBuilder, ctx ...context.Context) (obj *ContactManager, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &ContactManager{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_ContactManager))); err != nil {
		return
	}
	return
}

func BuildFollowIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FollowIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FollowIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FollowIndex))); err != nil {
		return
	}
	return
}

func BuildFollowIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FollowIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FollowIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FollowIndexA))); err != nil {
		return
	}
	return
}

func BuildFriendIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FriendIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FriendIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FriendIndex))); err != nil {
		return
	}
	return
}

func BuildFriendIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FriendIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FriendIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FriendIndexA))); err != nil {
		return
	}
	return
}

func BuildLightIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *LightIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &LightIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_LightIndex))); err != nil {
		return
	}
	return
}

func BuildLightIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *LightIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &LightIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_LightIndexA))); err != nil {
		return
	}
	return
}

func BuildMessage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Message, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Message{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_Message))); err != nil {
		return
	}
	return
}

func BuildSecurity(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Security, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Security{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_Security))); err != nil {
		return
	}
	return
}

func BuildSimpleIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *SimpleIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &SimpleIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_SimpleIndex))); err != nil {
		return
	}
	return
}

func BuildSimpleIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *SimpleIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &SimpleIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_SimpleIndexA))); err != nil {
		return
	}
	return
}

func BuildTopicA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TopicA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TopicA{
		DecrTagsById: p.QueryHook(_DecrTagsById_TopicA),
		IncrTagsById: p.QueryHook(_IncrTagsById_TopicA),
		TagsByIdA:    p.QueryHook(_TagsByIdA_TopicA),
		TagsByIdB:    p.QueryHook(_TagsByIdB_TopicA),
		TagsForIncr:  p.QueryHook(_TagsForIncr_TopicA),
	}
	if obj.HotTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_HotTags_TopicA))); err != nil {
		return
	}
	if obj.InsertTag, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_InsertTag_TopicA))); err != nil {
		return
	}
	if obj.NewestTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_NewestTags_TopicA))); err != nil {
		return
	}
	if obj.TagsByKeywordA, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordA_TopicA))); err != nil {
		return
	}
	if obj.TagsByKeywordB, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordB_TopicA))); err != nil {
		return
	}
	return
}

func BuildTweet(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Tweet, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Tweet{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_Tweet))); err != nil {
		return
	}
	return
}

func BuildTweetA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetA))); err != nil {
		return
	}
	return
}

func BuildTweetHelp(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetHelp, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetHelp{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetHelp))); err != nil {
		return
	}
	return
}

func BuildTweetHelpA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetHelpA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetHelpA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetHelpA))); err != nil {
		return
	}
	return
}

func BuildTweetManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetManage{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetManage))); err != nil {
		return
	}
	return
}

func BuildTweetManageA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetManageA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetManageA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetManageA))); err != nil {
		return
	}
	return
}

func BuildUserManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *UserManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &UserManage{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_UserManage))); err != nil {
		return
	}
	return
}

func BuildWallet(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Wallet, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Wallet{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_Wallet))); err != nil {
		return
	}
	return
}