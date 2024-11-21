import { NextRequest, NextResponse } from 'next/server'

import { instanceContent } from '@/instances/instanceContent'

export const POST = async (req: NextRequest) => {
  try {
    const payload = await req.json()

    await instanceContent.posts.deslikePost({ payload })

    return NextResponse.json(
      { mesesage: 'The post was successfully desliked!' },
      { status: 200 }
    )
  } catch (deslikePostByIdErr) {
    console.error({
      'POST/api/posts/deslike-post-by-id': deslikePostByIdErr.message
    })

    return NextResponse.json(
      { message: deslikePostByIdErr.message },
      { status: deslikePostByIdErr.statusCode }
    )
  }
}
