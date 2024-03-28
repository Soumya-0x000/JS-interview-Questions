/**
 * @param {number} millis
 */
async function sleep(millis) 
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

/** 
 * 
 * sleep(100).then(() => ) // 100
 */
