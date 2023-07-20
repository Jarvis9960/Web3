const LoadingProgress = ({ isLoading, progress }) => {
//   if (!isLoading) {
//     return null;
//   }

  //   return (
  //     <div className="loading-progress">
  //       <div className="loading-bar" style={{ width: `${progress}%` }}>
  //         <div className="progress-text">{`${progress}%`}</div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="lds-roller-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingProgress;
