import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const InputSearch = () => {
  const [inputFocused, setInputFocused] = useState(true)
  const [styleForm, setstyleForm] = useState(
    'flex gap-2 justify-center relative bg-backgroundSecondary rounded-full outline-none p-2 pl-4  border-2 border-titleColor'
  )
  const [styleIconSearch, setstyleIconSearch] = useState('text-titleColor')

  const handleOnFocus = () => {
    setInputFocused(false)
    isFocus()
  }
  const handleOnBlur = () => {
    setInputFocused(true)
    isFocus()
  }

  const isFocus = () => {
    if (inputFocused) {
      setstyleForm(
        'flex gap-2 justify-center relative bg-backgroundSecondary rounded-full outline-none p-2 pl-4  border-2 border-colorPrimary'
      )
      setstyleIconSearch('text-colorPrimary')
    } else {
      setstyleForm(
        'flex gap-2 justify-center relative bg-backgroundSecondary rounded-full outline-none p-2 pl-4  border-2 border-titleColor'
      )
      setstyleIconSearch('text-titleColor')
    }
  }

  return (
    <div>
      <form className={styleForm}>
        <label
          htmlFor='inputSearch'
          className='hidden'
        >
          input search
        </label>
        <div className={styleIconSearch}>
          <SearchIcon />
        </div>
        <input
          id='inputSearch'
          type='search'
          className='bg-inherit outline-none '
          placeholder='Search...'
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </form>
    </div>
  )
}

export default InputSearch
