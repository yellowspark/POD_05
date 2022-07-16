using AuthorizationMicroservice.DTO;
using AuthorizationMicroservice.Interface;
using AuthorizationMicroservice.Models;

namespace AuthorizationMicroservice.Repository
{
    public class MemberRepository: IMemberRepository
    {
        public List<AgentDetails> Members;
        public MemberRepository()
        {
            Members = new List<AgentDetails> { 
            new AgentDetails() { Name = "Devish",Password="Devish@123" },
            new AgentDetails() { Name = "Yasmeen ",Password="Yasmeen@123" },
            new AgentDetails() { Name = "Kajal",Password="Kajal@123" },
            new AgentDetails() { Name = "Pardeep",Password="Pardeep@123" },
            new AgentDetails() { Name = "Vedavathi",Password="Vedavathi@123" }};

        }
        public AgentDetails AuthenticateUser(MemberLoginDTO member)
        {
            AgentDetails user = Members.FirstOrDefault(u => u.Name == member.UserName && u.Password == member.Password);

            return user;
        }
    }
}
