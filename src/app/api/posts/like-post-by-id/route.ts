import { NextRequest, NextResponse } from 'next/server'

import { instanceContent } from '@/instances/instanceContent'

export const POST = async (req: NextRequest) => {
  try {
    const payload = await req.json()

    await instanceContent.posts.likePost({
      postId: payload.postId,
      userId: payload.userId
    })

    return NextResponse.json(
      { mesesage: 'The post was successfully liked!' },
      { status: 200 }
    )
  } catch (likePostByIdErr) {
    console.error({ 'POST/api/posts/like-post-by-id': likePostByIdErr.message })

    return NextResponse.json(
      { message: likePostByIdErr.message },
      { status: likePostByIdErr.statusCode }
    )
  }
}
