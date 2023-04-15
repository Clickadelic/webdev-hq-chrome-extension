import React from 'react'

function ArticleItem({title}) {
  if(result){

    const listOfResults = result.docs.map((item) => {
        return <itemItem key={item.id} title={item.title_display} />
    })
    
    return (
      <div>
          <ul>
              {listOfResults}
          </ul>
      </div>
  )
}

export default ArticleItem