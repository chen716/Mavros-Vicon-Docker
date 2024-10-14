// Generated by gencpp from file mavros_msgs/SetModeResponse.msg
// DO NOT EDIT!


#ifndef MAVROS_MSGS_MESSAGE_SETMODERESPONSE_H
#define MAVROS_MSGS_MESSAGE_SETMODERESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace mavros_msgs
{
template <class ContainerAllocator>
struct SetModeResponse_
{
  typedef SetModeResponse_<ContainerAllocator> Type;

  SetModeResponse_()
    : mode_sent(false)  {
    }
  SetModeResponse_(const ContainerAllocator& _alloc)
    : mode_sent(false)  {
  (void)_alloc;
    }



   typedef uint8_t _mode_sent_type;
  _mode_sent_type mode_sent;





  typedef boost::shared_ptr< ::mavros_msgs::SetModeResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::mavros_msgs::SetModeResponse_<ContainerAllocator> const> ConstPtr;

}; // struct SetModeResponse_

typedef ::mavros_msgs::SetModeResponse_<std::allocator<void> > SetModeResponse;

typedef boost::shared_ptr< ::mavros_msgs::SetModeResponse > SetModeResponsePtr;
typedef boost::shared_ptr< ::mavros_msgs::SetModeResponse const> SetModeResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::mavros_msgs::SetModeResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::mavros_msgs::SetModeResponse_<ContainerAllocator1> & lhs, const ::mavros_msgs::SetModeResponse_<ContainerAllocator2> & rhs)
{
  return lhs.mode_sent == rhs.mode_sent;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::mavros_msgs::SetModeResponse_<ContainerAllocator1> & lhs, const ::mavros_msgs::SetModeResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace mavros_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::SetModeResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::SetModeResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::SetModeResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "a70bfe6329ecf8f8d858daa6f3db7655";
  }

  static const char* value(const ::mavros_msgs::SetModeResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xa70bfe6329ecf8f8ULL;
  static const uint64_t static_value2 = 0xd858daa6f3db7655ULL;
};

template<class ContainerAllocator>
struct DataType< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "mavros_msgs/SetModeResponse";
  }

  static const char* value(const ::mavros_msgs::SetModeResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool mode_sent		# Mode known/parsed correctly and SET_MODE are sent\n"
"\n"
;
  }

  static const char* value(const ::mavros_msgs::SetModeResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.mode_sent);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct SetModeResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::mavros_msgs::SetModeResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::mavros_msgs::SetModeResponse_<ContainerAllocator>& v)
  {
    s << indent << "mode_sent: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.mode_sent);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MAVROS_MSGS_MESSAGE_SETMODERESPONSE_H
