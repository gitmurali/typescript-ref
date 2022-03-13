// @errors: 2345
interface DataState {
  digits: number[]
  names: string[]
  flags: Record<"darkMode" | "mobile", boolean>
}

type DataSDK = {
  // The mapped type
  // prettier-ignore
  [K in keyof DataState as `set${Capitalize<K>}`]: 
    (arg: DataState[K]) => void
}

function load(dataSDK: DataSDK) {
  dataSDK.setDigits([14])
  dataSDK.setFlags({ darkMode: true, mobil: false })
}