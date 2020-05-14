export default {
  async getLocations() {
    const json = await (await fetch("/api/locations")).json();
    return json;
  },

  async getFeed() {
    const res = await fetch(`/api/feed`);
    const { updates } = await res.json();
    return updates;
  },

  async getAvatar() {
    const res = await fetch("/api/avatar");
    const { image } = await res.json();
    return image;
  }
}

