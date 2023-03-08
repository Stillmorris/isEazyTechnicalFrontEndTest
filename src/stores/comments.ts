import { defineStore } from "pinia"
import mockdata from "@/mocks/comments.json"

export const useCommentsStore = defineStore("comments", {
  state: () => ({ 
    rawItems: mockdata as [],
    currentMessage: "" as string
  }),
  getters: {
    items: (state) => state.rawItems,
    message: (state) => state.currentMessage,
  },
  actions: {
    keyup(event: any) {
      this.currentMessage = event.target.value
      if (event.isComposing || event.keyCode === 13) {
        this.add()
      }
    },
    add() {
      if (this.currentMessage === "") {
        return false
      }
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      const d = new Date()
      const datestring = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " / " + (d.getHours() < 10 ? "0": "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0": "") + d.getMinutes()
      const newComment = {
        "type": "comment",
        "data": {
          "isHost": 1,
          "date": datestring,
          "message": this.currentMessage,
        }
      }
      this.rawItems.push(newComment)
      this.currentMessage = ""

      setTimeout(() => {
        document.getElementById("Chat").scroll({ top: document.getElementById("Chat").scrollHeight, behavior: 'smooth' })
      }, 50);
    }
  },
});
