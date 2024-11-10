import { CircleButtonProps } from './types'

export const CircleButton: React.FC<CircleButtonProps> = ({ label }) => {
  return (
    <div data-cid="circle-button">
      <button className="cta" type="button">
        <span>{label}</span>
        <svg height="10px" viewBox="0 0 13 10" width="15px">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </div>
  )
}
