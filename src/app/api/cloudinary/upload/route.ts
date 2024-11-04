import { cloudinaryApk } from '@/constants/environments/cloudinaryApk'
import { cloudinaryCloudName } from '@/constants/environments/cloudinaryName'
import { cloudinarySecret } from '@/constants/environments/cloudinarySecret'
import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'

cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApk,
  api_secret: cloudinarySecret
})

export const POST = async (request: Request) => {
  const { path } = await request.json()

  if (!path) {
    return NextResponse.json(
      { message: 'ERROR! Missing Image or Video Path' },
      { status: 400 }
    )
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 1515, height: 1515, crop: 'scale' }]
    }

    const result = await cloudinary.uploader.upload(path, options)

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'ERRO! Não foi possível fazer o upload da imagem' },
      { status: 500 }
    )
  }
}
