import { CircleButtonProps } from './types'

export const CircleButton: React.FC<CircleButtonProps> = ({ label }) => {
  return (
    <div data-cid="circle-button">
      <button type="button" className="cta">
        <span>{label}</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </div>
  )
}
