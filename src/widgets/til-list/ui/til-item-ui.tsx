import { Tag } from '@/entities/tag'
import { axios } from '@/shared/lib'
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from '@mui/icons-material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ReactQuill from 'react-quill'
import { useNavigate } from 'react-router-dom'

export function Til(props: {
  tilogId: number
  title: string
  tilerEmail: string
  nickname?: string | undefined
  thumbnailUrl?: string | undefined
  tagName: string
  likeCount: number
  regYmdt: string
  modYmdt: string
  isLiked: boolean
  isBookmarked: boolean
  content: string
}) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/til/${props.tilogId}`)
  }
  const queryClient = useQueryClient()
  const { mutateAsync: like } = useMutation({
    mutationFn: () => axios(`/api/tilog/${props.tilogId}/like`, { method: 'PUT' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feed'] })
    },
  })

  const { mutateAsync: bookmark } = useMutation({
    mutationFn: () => axios(`/api/tilog/${props.tilogId}/bookmark`, { method: 'PUT' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feed'] })
    },
  })

  const handleClickLike = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    like()
  }

  const handleClickBookMark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    bookmark()
  }

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer flex-col rounded-[8px] bg-[white]  shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]"
    >
      <div className="flex flex-col gap-18 px-16  py-18">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            <div className="text-14 font-[700] text-[#6B6B6B]">{props.tagName}</div>
            <Tag name={props.tagName} />
          </div>
          {props.isBookmarked ? (
            <div onClick={handleClickBookMark}>
              <Bookmark className="text-[#FF7878]" />
            </div>
          ) : (
            <div onClick={handleClickBookMark}>
              <BookmarkBorder className="text-[#BABABA]" />
            </div>
          )}
        </div>

        <div className="flex w-full gap-[16px]">
          <img className="h-75 min-w-98 rounded-md bg-[#FFE6E6]" src={props.thumbnailUrl}></img>
          <div className="flex  flex-col gap-8">
            <span className="line-clamp-2  break-keep text-18 font-[700] leading-25">{props.title}</span>
            <span className="line-clamp-1  text-[#4E4E4E]">
              <ReactQuill
                className="[&_.ql-editor]:max-h-50  [&_.ql-editor]:p-0"
                value={props.content}
                readOnly={true}
                theme={'bubble'}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-t-1 border-solid border-[#F5F5F5] px-16 py-8 text-12">
        <div className="text-12 opacity-60 ">
          <span className="text leading-18-[#6B6B6B]">{props.nickname}</span>{' '}
          <span className="text-[#BABABA]">{props.regYmdt}</span>
        </div>
        <div className="flex items-center text-12 text-[#6B6B6B] ">
          {props.isLiked ? (
            <div onClick={handleClickLike}>
              <Favorite className="!w-15 text-[#FF7878] opacity-100" />
            </div>
          ) : (
            <div onClick={handleClickLike}>
              <FavoriteBorder className="text-[#BABABA]" />
            </div>
          )}{' '}
          <span className="opacity-60">{props.likeCount}</span>
        </div>
      </div>
    </div>
  )
}
