import React from 'react'

interface IPropsComponent {
    task: any
}

export default function TaskIntro({
                                      task = {}
                                  }: IPropsComponent) {
    return (
        <div>
            {Object.entries(task).map(([key, value]) => {
                if (typeof value === 'string' || typeof value === 'number') {
                    return (<div key={key}>{key}: <strong>{value}</strong></div>);
                }
                return (<React.Fragment key={key}>{''}</React.Fragment>);
            })}
        </div>
    )
}
