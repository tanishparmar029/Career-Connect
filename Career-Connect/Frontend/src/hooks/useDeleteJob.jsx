import { useDispatch } from "react-redux";
import { removeAdminJob } from "@/redux/jobSlice";

const useDeleteJob = () => {
  const dispatch = useDispatch();

  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        dispatch(removeAdminJob(jobId));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting job:', error);
      return false;
    }
  };

  return { deleteJob };
};

export default useDeleteJob;