import React from 'react'

export default function ButtonPost({postUser}) {
    return (
        <div>
          {postUser["Events.eventIsAdmin"]===1?(<div><button>Supprimer</button><button>Editer</button></div>):null}
          {postUser["Events.eventRequest"]===1&&postUser["Events.eventIsAdmin"]===0&&postUser["Events.eventValidation"]==0?(<div><button>Annuler</button></div>):null}  
        </div>
    )
}
