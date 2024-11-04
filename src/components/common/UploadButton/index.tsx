import { Button } from "@/components/toolkit/Button"
import { UploadButtonProps } from "./types"

export const UploadButton: React.FC<UploadButtonProps> = ({setImagePath, uploadImageAction, children}) => {
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.includes('image')) {
      alert('Só é possível enviar imagens')
      return
    }

    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = async () => {
      const result = reader.result as string

      setImagePath(result)

      if (uploadImageAction) await uploadImageAction(result)
    }
  }


  return (
    <>
      <Button>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={e => handleChangeImage(e)}
          className="absolute left-1/2 top-1/2 z-30 mt-8 pb-16 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer opacity-0"
        />
        {children}
      </Button>
    </>
  )
}
