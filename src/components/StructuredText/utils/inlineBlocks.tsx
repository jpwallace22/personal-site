import { Record } from "datocms-structured-text-utils"
import Image from "next/image"

const inlineBlocks = (record: Record) => {
  record = record.media as Record
  switch (record.__typename) {
    case "FileField":
      return (
        <div>
          <Image
            className="mx-auto"
            src={record.url as string}
            alt={(record.alt as string) || ""}
            width={record.width as number}
            height={record.height as number}
          />
          {typeof record?.title === "string" && (
            <div className="text-center text-base">{record?.title}</div>
          )}
        </div>
      )
    default:
      return null
  }
}

export default inlineBlocks
