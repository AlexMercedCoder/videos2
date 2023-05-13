const alex = {
  wakeUp: function () {
    console.log("Alex Wakes Up");
    return this
  },
  eatBreakfast: function () {
    console.log("Eat Breakfast");
    return this
  },
};

alex.wakeUp().eatBreakfast().wakeUp().eatBreakfast()
