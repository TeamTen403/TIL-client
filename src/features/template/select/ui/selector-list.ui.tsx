import { templateAtomsAtom } from '@/entities/template'
import { useAtom, useAtomValue } from 'jotai'
import { TemplateSelector } from './selector.ui'
import { useMeasure } from 'react-use'
import { animated, useSpring } from '@react-spring/web'
import { useMolecule } from 'bunshi/react'
import { SelectorListMol } from './selector-list.model'
import { KeyboardArrowDownSharp } from '@mui/icons-material'

export function TemplateSelectorList() {
  const templateAtoms = useAtomValue(templateAtomsAtom)
  const { isExpandedAtom } = useMolecule(SelectorListMol)

  const [isExpanded, setExpanded] = useAtom(isExpandedAtom)

  const [bind, { height }] = useMeasure()
  const expand = useSpring({ height: isExpanded ? height + 32 : 0, overflow: isExpanded ? 'auto' : 'hidden' })
  const rotate = useSpring({ rotate: isExpanded ? 180 : 0, transformOrigin: 'center' })

  const handleClickExpand = () => setExpanded(expand => !expand)

  return (
    <div className="flex w-full flex-col bg-white">
      <animated.div className={'w-full'} style={expand}>
        <div ref={el => el && bind(el)} className="flex w-full gap-8 overflow-auto bg-white px-24 pb-6 pt-26">
          {templateAtoms.map(templateAtom => (
            <TemplateSelector key={`${templateAtom}`} templateAtom={templateAtom} />
          ))}
        </div>
      </animated.div>
      <div className="flex w-full items-center justify-center py-8">
        <button onClick={handleClickExpand} className="w-full">
          <animated.div style={rotate}>
            <KeyboardArrowDownSharp />
          </animated.div>
        </button>
      </div>
    </div>
  )
}
