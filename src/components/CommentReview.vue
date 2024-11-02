<template>
  <div class="commentReview">
    <div class="comment">
      <h3>Comments</h3>
    </div>

    <div v-for="(comment, index) in comments" :key="index">
      <Comment
        :username="comment.username"
        :timestamp="comment.timestamp"
        :text="editingIndex === index ? editingComment : comment.text"
        :imageSrc="comment.imageSrc"
        @delete="deleteComment(index)"
        @edit="editComment(index, comment.text)"
      />
      <div class="edit-comment" v-if="editingIndex === index">
        <input
          v-model="editingComment"
          type="text"
          placeholder="Edit your comment..."
        />
        <button @click="updateComment(index)">Update</button>
        <button @click="cancelEdit(index)">Cancel</button>
      </div>
    </div>

    <div class="write-comment">
      <div class="writeForUser">
        <p style="margin-left: 2%">Write Your Text</p>
        <input v-model="newComment" type="text" />
      </div>
      <div class="send">
        <button @click="addComment" style="background-color: #4ee77c">
          <span class="material-icons">send</span>Send
        </button>
        <button
          @click="cancelComment"
          style="background-color: #3b443e; color: #f44336"
        >
          <span class="material-icons"> close </span>Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
export default {
  name: "CommentReview",
  components: {
    Comment,
  },
  data() {
    return {
      comments: [],
      newComment: "",

      editingIndex: null,
      editingComment: "",
    };
  },
  created() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      const storedComments = localStorage.getItem("comments");
      if (storedComments) {
        this.comments = JSON.parse(storedComments);
      }
    },
    saveComments() {
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },
    addComment() {
      if (this.newComment.trim() !== "") {
        const profileImage =
          localStorage.getItem("userProfileImage") ||
          require("../assets/images/programmer.png");
        const username = localStorage.getItem("userName") || "Anonymous";
        const commentData = {
          username: username,
          timestamp: new Date().toLocaleString(),
          text: this.newComment,
          imageSrc: profileImage,
        };
        this.comments.push(commentData);
        this.newComment = "";
        this.saveComments();
      }
    },
    cancelComment() {
      this.newComment = "";
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
      this.saveComments();
    },
    editComment(index, currentText) {
      this.editingIndex = index;
      this.editingComment = currentText;
      this.comments[index].isEditing = true;
    },
    updateComment(index) {
      if (this.editingComment.trim() !== "") {
        this.comments[index].text = this.editingComment;
        this.editingIndex = null;
        this.editingComment = "";
        this.saveComments();
      }
    },
    cancelEdit(index) {
      this.editingComment = "";
      this.editingIndex = null;
    },
  },
};
</script>

<style scoped>
.commentReview {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 1078px;
  height: 650px;
  margin-top: 2%;
}
.comment {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment h3 {
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
}
.write-comment {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 1078px;
  height: 50px;
  margin-top: 15%;
}

.writeForUser input {
  width: 1078px;
  height: 140px;
  padding: 10px;
  margin-bottom: 15px;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  border: 1px solid #b3aeae;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

p {
  width: 119px;
  height: 20px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 8px;
}
.send {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.send button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
.send button:hover {
  filter: brightness(90%);
  transform: scale(1.02);
}

.edit-comment {
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;
}

.edit-comment input {
  width: 100%;
  height: 70px;
  padding: 10px;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  border: 1px solid #b3aeae;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.edit-comment button {
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-comment button:hover {
  filter: brightness(90%);
}

.edit-comment button:nth-child(1) {
  background-color: #4ee77c;
  margin-right: 10px;
}

.edit-comment button:nth-child(2) {
  background-color: #3b443e;
  color: #f44336;
}
</style>
