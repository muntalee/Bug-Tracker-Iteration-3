import Navbar from "./Navbar"


const BugDetail = () => {
  return (
    <div className="p-4">
      <div className="flex justify-around">
        <div className="bg-blue-500 p-2">
          <form action="">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-[4.5rem]">
                <label>Report #:</label>
                <input type="text" className="border-2 border-slate-400" />
              </div>
              <div className="flex gap-x-[3.1rem]">
                <label>Type of Bug:</label>
                <input type="text" className="border-2 border-slate-400" />
              </div>
              <div className="flex gap-x-4">
                <label>Summary of Bug:</label>
                <textarea rows={8} cols={30} className="border-2 border-slate-400"></textarea>
              </div>
              <div className="flex gap-x-8">
                <label>I would like to:</label>
                <div className="flex flex-col">
                  <div> <input type="checkbox" />
                <label> Updates on bug</label></div>
               
                <div> <input type="checkbox" />
                <label> Updates on bug</label></div>
                </div>
                
              </div>
            </div>
          </form>
        </div>
        <div className="p-2">
        <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default BugDetail