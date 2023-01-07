// Code generated by go-mir. DO NOT EDIT.

package v1

import (
	"net/http"

	"github.com/alimy/mir/v3"
	"github.com/gin-gonic/gin"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

type Loose interface {
	// Chain provide handlers chain for gin
	Chain() gin.HandlersChain

	GetUserProfile(*web.GetUserProfileReq) (*web.GetUserProfileResp, mir.Error)
	GetUserTweets(*web.GetUserTweetsReq) (*web.GetUserTweetsResp, mir.Error)
	Timeline(*web.TimelineReq) (*web.TimelineResp, mir.Error)

	mustEmbedUnimplementedLooseServant()
}

type LooseBinding interface {
	BindGetUserProfile(*gin.Context) (*web.GetUserProfileReq, mir.Error)
	BindGetUserTweets(*gin.Context) (*web.GetUserTweetsReq, mir.Error)
	BindTimeline(*gin.Context) (*web.TimelineReq, mir.Error)

	mustEmbedUnimplementedLooseBinding()
}

type LooseRender interface {
	RenderGetUserProfile(*gin.Context, *web.GetUserProfileResp, mir.Error)
	RenderGetUserTweets(*gin.Context, *web.GetUserTweetsResp, mir.Error)
	RenderTimeline(*gin.Context, *web.TimelineResp, mir.Error)

	mustEmbedUnimplementedLooseRender()
}

// RegisterLooseServant register Loose servant to gin
func RegisterLooseServant(e *gin.Engine, s Loose, b LooseBinding, r LooseRender) {
	router := e.Group("v1")
	// use chain for router
	middlewares := s.Chain()
	router.Use(middlewares...)

	// register routes info to router
	router.Handle("GET", "/user/profile", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}

		req, err := b.BindGetUserProfile(c)
		if err != nil {
			r.RenderGetUserProfile(c, nil, err)
			return
		}
		resp, err := s.GetUserProfile(req)
		r.RenderGetUserProfile(c, resp, err)
	})

	router.Handle("GET", "/user/posts", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}

		req, err := b.BindGetUserTweets(c)
		if err != nil {
			r.RenderGetUserTweets(c, nil, err)
			return
		}
		resp, err := s.GetUserTweets(req)
		r.RenderGetUserTweets(c, resp, err)
	})

	router.Handle("GET", "/posts", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}

		req, err := b.BindTimeline(c)
		if err != nil {
			r.RenderTimeline(c, nil, err)
			return
		}
		resp, err := s.Timeline(req)
		r.RenderTimeline(c, resp, err)
	})

}

// UnimplementedLooseServant can be embedded to have forward compatible implementations.
type UnimplementedLooseServant struct {
}

func (UnimplementedLooseServant) Chain() gin.HandlersChain {
	return nil
}

func (UnimplementedLooseServant) GetUserProfile(req *web.GetUserProfileReq) (*web.GetUserProfileResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedLooseServant) GetUserTweets(req *web.GetUserTweetsReq) (*web.GetUserTweetsResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedLooseServant) Timeline(req *web.TimelineReq) (*web.TimelineResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedLooseServant) mustEmbedUnimplementedLooseServant() {}

// UnimplementedLooseRender can be embedded to have forward compatible implementations.
type UnimplementedLooseRender struct {
	RenderAny func(*gin.Context, any, mir.Error)
}

func (r *UnimplementedLooseRender) RenderGetUserProfile(c *gin.Context, data *web.GetUserProfileResp, err mir.Error) {
	r.RenderAny(c, data, err)
}

func (r *UnimplementedLooseRender) RenderGetUserTweets(c *gin.Context, data *web.GetUserTweetsResp, err mir.Error) {
	r.RenderAny(c, data, err)
}

func (r *UnimplementedLooseRender) RenderTimeline(c *gin.Context, data *web.TimelineResp, err mir.Error) {
	r.RenderAny(c, data, err)
}

func (r *UnimplementedLooseRender) mustEmbedUnimplementedLooseRender() {}

// UnimplementedLooseBinding can be embedded to have forward compatible implementations.
type UnimplementedLooseBinding struct {
	BindAny func(*gin.Context, any) mir.Error
}

func (b *UnimplementedLooseBinding) BindGetUserProfile(c *gin.Context) (*web.GetUserProfileReq, mir.Error) {
	obj := new(web.GetUserProfileReq)
	err := b.BindAny(c, obj)
	return obj, err
}

func (b *UnimplementedLooseBinding) BindGetUserTweets(c *gin.Context) (*web.GetUserTweetsReq, mir.Error) {
	obj := new(web.GetUserTweetsReq)
	err := b.BindAny(c, obj)
	return obj, err
}

func (b *UnimplementedLooseBinding) BindTimeline(c *gin.Context) (*web.TimelineReq, mir.Error) {
	obj := new(web.TimelineReq)
	err := b.BindAny(c, obj)
	return obj, err
}

func (b *UnimplementedLooseBinding) mustEmbedUnimplementedLooseBinding() {}
