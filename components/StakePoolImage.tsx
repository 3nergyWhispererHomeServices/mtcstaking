import { ButtonSmall } from 'common/ButtonSmall'
import { url } from 'inspector'
import { useStakePoolMetadataCtx } from 'providers/StakePoolMetadataProvider'

export const StakePoolImage = ({ onClick }: { onClick?: () => void }) => {
  const { data: config } = useStakePoolMetadataCtx()
  return (
    <div className="relative flex w-1/4 grow items-center justify-center rounded-xl">
      <img
        className={`max-h-[200px] w-auto rounded-xl ${
          config?.logoPadding && 'p-8'
        }`}
        src='./MTC_logo.png'
        alt="Meta Tune Club"
      />
    </div>
  )
}
